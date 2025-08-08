export function useModal(): {
    state: any;
    openModal: () => void;
    closeModal: () => void;
    onAnimationEnd: () => void;
    className: string;
};
