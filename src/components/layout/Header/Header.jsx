import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import logo from '../../../assets/images/FaviconPortfolio.png';
import { socialLinks } from '../../../data/socialLinks.js';
import LanguageSwitcher from '../../ui/LanguageSwitcher/LanguageSwitcher.jsx';
import styles from './Header.module.css';

const MOBILE_MENU_ID = 'main-navigation';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const DESKTOP_MENU_QUERY = '(min-width: 1100px)';
const MENU_OPEN_OPTIONS = {
  duration: 380,
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
  fill: 'both',
};
const MENU_CLOSE_OPTIONS = {
  duration: 320,
  easing: 'cubic-bezier(0.4, 0, 1, 1)',
  fill: 'none',
};
const MENU_CONTENT_OPEN_OPTIONS = {
  delay: 130,
  duration: 180,
  easing: 'ease-out',
  fill: 'both',
};
const MENU_CONTENT_CLOSE_OPTIONS = {
  duration: 90,
  easing: 'ease-in',
  fill: 'none',
};

const navigationItems = [
  { labelKey: 'navigation.projects', hash: 'projects' },
  { labelKey: 'navigation.about', hash: 'about' },
  { labelKey: 'navigation.experience', hash: 'experience' },
  { labelKey: 'navigation.techStack', hash: 'skills' },
  { labelKey: 'navigation.contact', hash: 'contact' },
];

function prefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function isDesktopMenuLayout(menuElement) {
  return window.getComputedStyle(menuElement).position === 'static';
}

function getCurrentPanelFrame(panelElement) {
  const styles = window.getComputedStyle(panelElement);

  return {
    borderRadius: styles.borderRadius,
    clipPath: styles.clipPath,
    opacity: styles.opacity,
    transform:
      styles.transform === 'none'
        ? 'translate(0, 0) scale(1)'
        : styles.transform,
  };
}

function getCurrentContentFrame(contentElement) {
  const styles = window.getComputedStyle(contentElement);

  return {
    opacity: styles.opacity,
  };
}

function getCurrentArrowFrame(arrowElement) {
  const styles = window.getComputedStyle(arrowElement);

  return {
    opacity: styles.opacity,
    transform:
      styles.transform === 'none'
        ? 'rotate(45deg) scale(0)'
        : styles.transform,
  };
}

function resetMenuAnimationStyles(
  menuShellElement,
  panelElement,
  contentElement,
  arrowElement,
) {
  menuShellElement.style.removeProperty('--menu-arrow-right');
  menuShellElement.style.removeProperty('opacity');
  menuShellElement.style.removeProperty('visibility');
  panelElement.style.removeProperty('border-radius');
  panelElement.style.removeProperty('clip-path');
  panelElement.style.removeProperty('opacity');
  panelElement.style.removeProperty('transform');
  contentElement.style.removeProperty('opacity');
  arrowElement.style.removeProperty('opacity');
  arrowElement.style.removeProperty('transform');
}

function getMenuAnimationGeometry(
  menuButtonElement,
  menuShellElement,
  panelElement,
) {
  const buttonRect = menuButtonElement.getBoundingClientRect();
  const menuShellRect = menuShellElement.getBoundingClientRect();
  const panelRect = panelElement.getBoundingClientRect();

  if (
    !buttonRect.width ||
    !buttonRect.height ||
    !menuShellRect.width ||
    !panelRect.width ||
    !panelRect.height
  ) {
    return null;
  }

  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const bubbleWidth = Math.max(buttonRect.width * 1.15, 44);
  const bubbleHeight = Math.max(buttonRect.height * 0.9, 34);
  const initialTopRightX = buttonCenterX + bubbleWidth / 2;
  const initialTop = buttonRect.bottom + 4;
  const translateX = initialTopRightX - panelRect.right;
  const translateY = initialTop - panelRect.top;
  const scaleX = bubbleWidth / panelRect.width;
  const scaleY = bubbleHeight / panelRect.height;
  const earlyScaleX = scaleX + (1 - scaleX) * 0.28;
  const earlyScaleY = scaleY + (1 - scaleY) * 0.2;
  const middleScaleX = scaleX + (1 - scaleX) * 0.62;
  const middleScaleY = scaleY + (1 - scaleY) * 0.54;
  const lateScaleX = scaleX + (1 - scaleX) * 0.9;
  const lateScaleY = scaleY + (1 - scaleY) * 0.86;
  const arrowSize = 14;
  const arrowRight = Math.max(
    0,
    menuShellRect.right - buttonCenterX - arrowSize / 2,
  );

  return {
    arrowRight,
    panelKeyframes: [
      {
        borderRadius: '999px',
        clipPath: 'inset(0 0 0 0 round 999px)',
        offset: 0,
        opacity: 0.55,
        transform: `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`,
      },
      {
        borderRadius: '2rem',
        clipPath: 'inset(0 0 0 0 round 2rem)',
        offset: 0.24,
        opacity: 0.82,
        transform: `translate(${translateX * 0.68}px, ${
          translateY * 0.62
        }px) scale(${earlyScaleX}, ${earlyScaleY})`,
      },
      {
        borderRadius: '1.5rem',
        clipPath: 'inset(0 0 0 0 round 1.5rem)',
        offset: 0.58,
        opacity: 1,
        transform: `translate(${translateX * 0.34}px, ${
          translateY * 0.28
        }px) scale(${middleScaleX}, ${middleScaleY})`,
      },
      {
        borderRadius: '0.55rem',
        clipPath: 'inset(0 0 0 0 round 0.55rem)',
        offset: 0.84,
        opacity: 1,
        transform: `translate(${translateX * 0.08}px, ${
          translateY * 0.06
        }px) scale(${lateScaleX}, ${lateScaleY})`,
      },
      {
        borderRadius: '0px',
        clipPath: 'inset(0 0 0 0 round 0px)',
        offset: 1,
        opacity: 1,
        transform: 'translate(0, 0) scale(1, 1)',
      },
    ],
  };
}

function getArrowOpenKeyframes(currentArrowFrame) {
  return [
    currentArrowFrame ?? {
      opacity: 1,
      transform: 'rotate(45deg) scale(1)',
    },
    {
      offset: 0.5,
      opacity: 0,
      transform: 'rotate(45deg) scale(0)',
    },
    {
      opacity: 0,
      transform: 'rotate(45deg) scale(0)',
    },
  ];
}

function getArrowCloseKeyframes(currentArrowFrame) {
  return [
    currentArrowFrame ?? {
      opacity: 0,
      transform: 'rotate(45deg) scale(0)',
    },
    {
      offset: 0.52,
      opacity: 0,
      transform: 'rotate(45deg) scale(0)',
    },
    {
      opacity: 1,
      transform: 'rotate(45deg) scale(1)',
    },
  ];
}

function cancelAnimations(animations) {
  animations.forEach((animation) => animation.cancel());
}

function getPanelOpenKeyframes(panelKeyframes, currentPanelFrame) {
  return [currentPanelFrame ?? panelKeyframes[0], ...panelKeyframes.slice(1)];
}

function getPanelCloseKeyframes(panelKeyframes, currentPanelFrame) {
  const openFrame = {
    ...panelKeyframes[panelKeyframes.length - 1],
    offset: 0,
  };
  const initialFrame = {
    ...(currentPanelFrame ?? openFrame),
    offset: 0,
  };
  const closeHoldFrame = {
    ...openFrame,
    offset: 0.18,
  };
  const reversedFrames = panelKeyframes
    .slice(0, -1)
    .reverse()
    .map((frame) => ({
      ...frame,
      offset: 0.18 + (1 - frame.offset) * 0.82,
    }));

  return [initialFrame, closeHoldFrame, ...reversedFrames];
}

function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const containerRef = useRef(null);
  const menuShellRef = useRef(null);
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const menuContentRef = useRef(null);
  const menuArrowRef = useRef(null);
  const activeMenuAnimationsRef = useRef([]);
  const menuAnimationRequestIdRef = useRef(0);
  const isMenuOpenRef = useRef(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const isHomePage = location.pathname === '/';

  const shouldCloseImmediately = useCallback(() => {
    return (
      !menuShellRef.current ||
      isDesktopMenuLayout(menuShellRef.current) ||
      prefersReducedMotion()
    );
  }, []);

  const openMenu = useCallback(() => {
    if (isMenuOpenRef.current) {
      return;
    }

    menuAnimationRequestIdRef.current += 1;
    isMenuOpenRef.current = true;
    setIsMenuMounted(true);
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    if (!isMenuOpenRef.current) {
      return;
    }

    menuAnimationRequestIdRef.current += 1;
    isMenuOpenRef.current = false;
    setIsMenuOpen(false);

    if (shouldCloseImmediately()) {
      setIsMenuMounted(false);
    }
  }, [shouldCloseImmediately]);

  const toggleMenu = useCallback(() => {
    if (isMenuOpenRef.current) {
      closeMenu();
      return;
    }

    openMenu();
  }, [closeMenu, openMenu]);

  useEffect(() => {
    return () => {
      menuAnimationRequestIdRef.current += 1;
      const animations = activeMenuAnimationsRef.current;
      activeMenuAnimationsRef.current = [];
      cancelAnimations(animations);
    };
  }, []);

  useEffect(() => {
    const desktopMenuQuery = window.matchMedia(DESKTOP_MENU_QUERY);

    function handleDesktopMenuLayout(event) {
      if (!event.matches) {
        return;
      }

      menuAnimationRequestIdRef.current += 1;
      isMenuOpenRef.current = false;

      const animations = activeMenuAnimationsRef.current;
      activeMenuAnimationsRef.current = [];
      cancelAnimations(animations);

      const menuShellElement = menuShellRef.current;
      const panelElement = mobileMenuRef.current;
      const contentElement = menuContentRef.current;
      const arrowElement = menuArrowRef.current;

      if (
        menuShellElement &&
        panelElement &&
        contentElement &&
        arrowElement
      ) {
        resetMenuAnimationStyles(
          menuShellElement,
          panelElement,
          contentElement,
          arrowElement,
        );
      }

      setIsMenuOpen(false);
      setIsMenuMounted(false);
    }

    desktopMenuQuery.addEventListener('change', handleDesktopMenuLayout);

    return () => {
      desktopMenuQuery.removeEventListener('change', handleDesktopMenuLayout);
    };
  }, []);

  useLayoutEffect(() => {
    const menuShellElement = menuShellRef.current;
    const menuButtonElement = menuButtonRef.current;
    const panelElement = mobileMenuRef.current;
    const contentElement = menuContentRef.current;
    const arrowElement = menuArrowRef.current;

    if (
      !menuShellElement ||
      !menuButtonElement ||
      !panelElement ||
      !contentElement ||
      !arrowElement
    ) {
      return undefined;
    }

    if (!isMenuMounted) {
      const animations = activeMenuAnimationsRef.current;
      activeMenuAnimationsRef.current = [];
      cancelAnimations(animations);
      resetMenuAnimationStyles(
        menuShellElement,
        panelElement,
        contentElement,
        arrowElement,
      );
      return undefined;
    }

    const animationRequestId = menuAnimationRequestIdRef.current;
    const hasActiveAnimations = activeMenuAnimationsRef.current.length > 0;
    const currentPanelFrame = hasActiveAnimations
      ? getCurrentPanelFrame(panelElement)
      : null;
    const currentContentFrame = hasActiveAnimations
      ? getCurrentContentFrame(contentElement)
      : null;
    const currentArrowFrame = hasActiveAnimations
      ? getCurrentArrowFrame(arrowElement)
      : null;

    const previousAnimations = activeMenuAnimationsRef.current;
    activeMenuAnimationsRef.current = [];
    cancelAnimations(previousAnimations);
    resetMenuAnimationStyles(
      menuShellElement,
      panelElement,
      contentElement,
      arrowElement,
    );

    if (isDesktopMenuLayout(menuShellElement) || prefersReducedMotion()) {
      if (!isMenuOpen) {
        setIsMenuMounted(false);
      }

      return undefined;
    }

    const menuAnimationGeometry = getMenuAnimationGeometry(
      menuButtonElement,
      menuShellElement,
      panelElement,
    );

    if (!menuAnimationGeometry) {
      if (!isMenuOpen) {
        setIsMenuMounted(false);
      }

      return undefined;
    }

    menuShellElement.style.setProperty(
      '--menu-arrow-right',
      `${menuAnimationGeometry.arrowRight}px`,
    );

    const panelAnimationKeyframes = isMenuOpen
      ? getPanelOpenKeyframes(
          menuAnimationGeometry.panelKeyframes,
          currentPanelFrame,
        )
      : getPanelCloseKeyframes(
          menuAnimationGeometry.panelKeyframes,
          currentPanelFrame,
        );
    const contentAnimationKeyframes = isMenuOpen
      ? [currentContentFrame ?? { opacity: 0 }, { opacity: 1 }]
      : [currentContentFrame ?? { opacity: 1 }, { opacity: 0 }];
    const arrowAnimationKeyframes = isMenuOpen
      ? getArrowOpenKeyframes(currentArrowFrame)
      : getArrowCloseKeyframes(currentArrowFrame);

    const panelAnimation = panelElement.animate(
      panelAnimationKeyframes,
      isMenuOpen ? MENU_OPEN_OPTIONS : MENU_CLOSE_OPTIONS,
    );
    const contentAnimation = contentElement.animate(
      contentAnimationKeyframes,
      isMenuOpen ? MENU_CONTENT_OPEN_OPTIONS : MENU_CONTENT_CLOSE_OPTIONS,
    );
    const arrowAnimation = arrowElement.animate(
      arrowAnimationKeyframes,
      isMenuOpen ? MENU_OPEN_OPTIONS : MENU_CLOSE_OPTIONS,
    );

    const animations = [panelAnimation, contentAnimation, arrowAnimation];
    activeMenuAnimationsRef.current = animations;

    Promise.allSettled(animations.map((animation) => animation.finished)).then(
      () => {
        if (
          menuAnimationRequestIdRef.current !== animationRequestId ||
          activeMenuAnimationsRef.current !== animations
        ) {
          return;
        }

        activeMenuAnimationsRef.current = [];
        cancelAnimations(animations);
        resetMenuAnimationStyles(
          menuShellElement,
          panelElement,
          contentElement,
          arrowElement,
        );

        if (!isMenuOpen) {
          setIsMenuMounted(false);
        }
      },
    );

    return undefined;
  }, [isMenuMounted, isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeMenu();
      }
    }

    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) {
        closeMenu();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('pointerdown', handlePointerDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [closeMenu, isMenuOpen]);

  function getHomeAnchorHref(hash) {
    return isHomePage ? `#${hash}` : `/#${hash}`;
  }

  const menuClassName = [
    styles.menu,
    isMenuMounted ? styles.menuMounted : '',
    isMenuOpen ? styles.menuOpen : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={styles.header}>
      <div className={styles.container} ref={containerRef}>
        <a
          className={styles.brand}
          href={getHomeAnchorHref('home')}
          aria-label={t('navigation.home')}
          onClick={closeMenu}
        >
          <img className={styles.logo} src={logo} alt="" />
          <span className={styles.name}>Ángel Jiménez Ragel</span>
        </a>

        <div className={styles.mobileControls}>
          <LanguageSwitcher />
          <button
            className={`${styles.menuButton} ${
              isMenuOpen ? styles.menuButtonOpen : ''
            }`}
            ref={menuButtonRef}
            type="button"
            aria-controls={MOBILE_MENU_ID}
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen
                ? t('accessibility.closeMenu')
                : t('accessibility.openMenu')
            }
            onClick={toggleMenu}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              <span className={styles.menuIconLine} />
              <span className={styles.menuIconLine} />
              <span className={styles.menuIconLine} />
            </span>
          </button>
        </div>

        <div
          className={menuClassName}
          id={MOBILE_MENU_ID}
          ref={menuShellRef}
        >
          <span
            className={styles.menuArrow}
            aria-hidden="true"
            ref={menuArrowRef}
          />

          <div
            className={styles.menuSurface}
            aria-hidden="true"
            ref={mobileMenuRef}
          />

          <div className={styles.menuContent} ref={menuContentRef}>
            <nav
              className={styles.navigation}
              aria-label={t('accessibility.mainNavigation')}
            >
              {navigationItems.map((item) => (
                <a
                  className={styles.link}
                  href={getHomeAnchorHref(item.hash)}
                  key={item.hash}
                  onClick={closeMenu}
                >
                  {t(item.labelKey)}
                </a>
              ))}
            </nav>

            <div className={styles.desktopLanguage}>
              <LanguageSwitcher />
            </div>

            <div className={styles.menuDivider} />

            <a
              className={styles.cvLink}
              href={socialLinks.cv}
              download
              onClick={closeMenu}
            >
              {t('navigation.downloadCv')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
