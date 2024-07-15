

declare module 'react-scroll' {
    export interface LinkProps {
      to: string;
      spy?: boolean;
      smooth?: boolean | string;
      offset?: number;
      duration?: number | ((distance: number) => number);
      containerId?: string;
      className?: string;
      activeClass?: string;
      style?: React.CSSProperties;
      onSetActive?: (to: string) => void;
      onSetInactive?: () => void;
      ignoreCancelEvents?: boolean;
      hashSpy?: boolean;
      saveHash?: boolean;
      toHash?: boolean;
    }
  
    export class Link extends React.Component<LinkProps, any> {}
  
    export interface ElementProps {
      name: string;
      className?: string;
      id?: string;
      style?: React.CSSProperties;
    }
  
    export class Element extends React.Component<ElementProps, any> {}
  
    // Add other modules and exports as needed
  }