import React from 'react';
import './Circle.scss';
export type CircleVariant = 'default' | 'success' | 'info' | 'attention' | 'critical' | 'warning' | 'new';
export interface CircleProps {
    variant: CircleVariant;
}
export declare function Circle({ variant }: CircleProps): React.JSX.Element;
