declare function Badge({ title, variant, progress }: {
    title: any;
    variant?: string | undefined;
    progress?: string | undefined;
}): React.JSX.Element;
declare namespace Badge {
    namespace propTypes {
        let progress: any;
        let title: any;
        let variant: any;
    }
}
export default Badge;
import React from 'react';
