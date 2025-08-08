import { NavigationItemProps } from '@components/admin/cms/NavigationItem.jsx';
import React from 'react';
import './NavigationItemGroup.scss';
interface NavigationItemGroupProps {
    id: string;
    name: string;
    items: NavigationItemProps[];
    Icon: React.ElementType | null;
    url: string | null;
}
export declare function NavigationItemGroup({ id, name, items, Icon, url }: NavigationItemGroupProps): React.JSX.Element;
export declare namespace NavigationItemGroup {
    var defaultProps: {
        items: never[];
        Icon: null;
        url: null;
    };
}
export {};
