function skillsMember() {
    return {
        restrict: 'E',
        templateURL: 'modules/skills/views/member.html',
        controller: 'SkillsMembersController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: "="
        }
    };
}