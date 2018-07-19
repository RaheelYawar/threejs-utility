export default class ThreeUtility {
    static getAnimationTimeScale(speed, clipDuration) {
        return clipDuration / speed;
    }

    static getAnimationDuration(clipDuration, timeScale) {
        return clipDuration * timeScale;
    }

    static inAttackCone(attackerDir, attackerPos, victimPosition, attackRange) {
        const viewDir = new THREE.Vector3();
        viewDir.copy(attackerDir);

        const targetDir = new THREE.Vector3();
        targetDir.copy(victimPosition);
        targetDir.x -= attackerPos.x;
        targetDir.y -= attackerPos.y;
        targetDir.z -= attackerPos.z;
        targetDir.normalize();

        return targetDir.dot(viewDir) > 0.5
            && this.inAttackRange(attackerPos, victimPosition, attackRange);
    }

    static inAttackRange(attackerPos, victimPosition, attackRange) {
        return attackerPos.distanceTo(victimPosition) <= attackRange;
    }
}