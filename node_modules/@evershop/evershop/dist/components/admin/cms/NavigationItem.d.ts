import React from 'react';
import './NavigationItem.scss';
export interface NavigationItemProps {
    Icon: React.ElementType;
    url: string;
    title: string;
}
export declare function NavigationItem({ Icon, url, title }: NavigationItemProps): React.JSX.Element;
