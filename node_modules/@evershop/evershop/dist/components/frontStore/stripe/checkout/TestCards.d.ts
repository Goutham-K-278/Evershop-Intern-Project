export default TestCards;
declare function TestCards({ showTestCard, testSuccess, testFailure }: {
    showTestCard: any;
    testSuccess: any;
    testFailure: any;
}): React.JSX.Element;
declare namespace TestCards {
    namespace propTypes {
        let showTestCard: any;
        let testSuccess: any;
        let testFailure: any;
    }
}
import React from 'react';
