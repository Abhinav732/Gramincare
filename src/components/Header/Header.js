import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import '@radix-ui/themes/styles.css';


import './styles.css';

const header = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Overview <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href="/">
                    <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="CalloutHeading">MCare</div>
                    <p className="CalloutText">Simplifying Healthcare for Every Family Member</p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="/benefits" title="Benefits" className='justify'>
              MCare helps save time and reduce stress by centralizing all your family’s health information in one place.
              </ListItem>
              <ListItem href="/works" title="How It Works" className='justify'>
              Start by signing up and adding your family members to your MCare account.
              </ListItem>
              <ListItem href="/colors" title="Technology & Security" className='justify'>
              We ensure your privacy with advanced encryption and security for your personal and health data
               </ListItem>
              
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Government Policies <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List two">
              <ListItem title="National Health Policy (NHP)" href="/primitives/docs/overview/introduction" className='justify'>
              Guiding principles for a comprehensive and accessible healthcare system
              </ListItem>
              <ListItem title="Pradhan Mantri Jan Arogya Yojana (PMJAY)" href="/primitives/docs/overview/getting-started" className='justify'> 
              Providing health insurance to over 500 million Indians
              </ListItem>
              <ListItem title=" National Rural Health Mission (NRHM)" href="/primitives/docs/guides/styling" className='justify'>
              Improving healthcare infrastructure and services in rural areas
              </ListItem>
              <ListItem title="National Health Protection Scheme (NHPS)" href="/primitives/docs/guides/animation" className='justify'>
              Expanding coverage for secondary and tertiary healthcare services
              </ListItem>
              <ListItem title="Pradhan Mantri Swasthya Suraksha Yojana (PMSSY)" href="/primitives/docs/overview/accessibility" className='justify'>
              Enhancing healthcare infrastructure with new AIIMS and medical institutions
              </ListItem>
              <ListItem title="Integrated Child Development Services (ICDS)" href="/primitives/docs/overview/releases" className='justify'>
              Promoting early childhood care and nutrition for children and mothers
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
            FAQ
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
            Navigations
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));

export default header;