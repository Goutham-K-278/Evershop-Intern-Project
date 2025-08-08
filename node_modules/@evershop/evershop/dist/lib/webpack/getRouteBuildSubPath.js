export function getRouteBuildSubPath(route) {
    const { id, isAdmin } = route;
    return isAdmin === true ? `admin/${id}` : `frontStore/${id}`;
}
//# sourceMappingURL=getRouteBuildSubPath.js.map