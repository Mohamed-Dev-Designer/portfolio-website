import { useEffect, useRef } from 'react';
import './OsmoDock.css';

export function OsmoDock() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const navItems = navRef.current.querySelectorAll('.nav-item');

    const toggleSiblingClass = (items: NodeListOf<Element>, index: number, offset: number, className: string, add: boolean) => {
      const sibling = items[index + offset];
      if (sibling) {
        sibling.classList.toggle(className, add);
      }
    };

    const cleanupFns: Array<() => void> = [];

    navItems.forEach((item, index) => {
      const handleMouseEnter = () => {
        item.classList.add('hover');
        toggleSiblingClass(navItems, index, -1, 'sibling-close', true);
        toggleSiblingClass(navItems, index, 1, 'sibling-close', true);
        toggleSiblingClass(navItems, index, -2, 'sibling-far', true);
        toggleSiblingClass(navItems, index, 2, 'sibling-far', true);
      };

      const handleMouseLeave = () => {
        item.classList.remove('hover');
        toggleSiblingClass(navItems, index, -1, 'sibling-close', false);
        toggleSiblingClass(navItems, index, 1, 'sibling-close', false);
        toggleSiblingClass(navItems, index, -2, 'sibling-far', false);
        toggleSiblingClass(navItems, index, 2, 'sibling-far', false);
      };

      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);

      cleanupFns.push(() => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="osmo-cursor-global bg-white">
      <div className="nav-wrap" ref={navRef}>
        <nav className="nav-bar">
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-item__link"><img src="https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be92ee5ddf0080fb90_notion.png" loading="eager" alt="Notion app icon" className="image" /></a>
              <div className="nav-item__tooltip">
                <div>Notion</div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-item__link"><img src="https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6bef9d004f8a9cf3b29_asana.png" loading="eager" alt="Asana app icon" className="image" /></a>
              <div className="nav-item__tooltip">
                <div>Asana</div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-item__link"><img src="https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be8c099d4e1ed55770_slack.png" loading="eager" alt="Slack app icon" className="image" /></a>
              <div className="nav-item__tooltip">
                <div>Slack</div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-item__link"><img src="https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be5b31ba243e4da377_loom.png" loading="eager" alt="Loom app icon" className="image" /></a>
              <div className="nav-item__tooltip">
                <div>Loom</div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-item__link"><img src="https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6bea97e140677496dae_spotify.png" loading="eager" alt="Spotify app icon" className="image" /></a>
              <div className="nav-item__tooltip">
                <div>Spotify</div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-item__link"><img src="https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6bea73fcc6ee568f6f0_webflow.png" loading="eager" alt="Webflow app icon" className="image" /></a>
              <div className="nav-item__tooltip">
                <div>Webflow</div>
              </div>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-item__link"><img src={`${import.meta.env.BASE_URL}assets/app.png`} loading="eager" alt="app icon" className="image" /></a>
              <div className="nav-item__tooltip">
                <div>Hello</div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-item__link"><img src="https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6bdf9d004f8a9cf3b09_adobe-illustrator.png" loading="eager" alt="Adobe Illustrator app icon" className="image" /></a>
              <div className="nav-item__tooltip">
                <div>Adobe Illustrator</div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-item__link"><img src="https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be1de916069b5e1aaa_figma.png" loading="eager" alt="figma app icon" className="image" /></a>
              <div className="nav-item__tooltip">
                <div>Figma</div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-item__link"><img src="https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be1de916069b5e1a86_adobe-photoshop.png" loading="eager" alt="Photoshop app icon" className="image" /></a>
              <div className="nav-item__tooltip">
                <div>Photoshop</div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-item__link"><img src="https://cdn.prod.website-files.com/6728a3e6f4f4161c235bc519/6728a6be051d32942a7aa31e_adobe-premierepro.png" loading="eager" alt="Premiere Pro app icon" className="image" /></a>
              <div className="nav-item__tooltip">
                <div>Premiere Pro</div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
