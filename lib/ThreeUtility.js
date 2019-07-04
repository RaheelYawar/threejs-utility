import * as THREE from 'three';
/**
 * A collection of useful Three.js utility functions.
 * Three.js needs to be in the script that uses these functions.
 *
 * @author Raheel Yawar <raheelyawar@gmail.com>
 *
 * @class Utility
 * @static
 * */
export default class ThreeUtility {
    /**
     * @param {number} speed
     * @param {number} clipDuration
     * */
    static getAnimationTimeScale(speed, clipDuration) {
        return clipDuration / speed;
    }

    /**
     * @param {number} clipDuration
     * @param {number} timeScale
     * */
    static getAnimationDuration(clipDuration, timeScale) {
        return clipDuration * timeScale;
    }

    /**
     * @param {Vector3} attackerDir
     * @param {Vector3} attackerPos
     * @param {Vector3} victimPosition
     * @param {number} attackRange
     * */
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

    /**
     * @param {Vector3} attackerPos
     * @param {Vector3} victimPosition
     * @param {number} attackRange
     * */
    static inAttackRange(attackerPos, victimPosition, attackRange) {
        return attackerPos.distanceTo(victimPosition) <= attackRange;
    }

    /**
     * @param {Vector3} v
     * */
    static isVector3Zero(v) {
        return v.z === 0 && v.y === 0 && v.z === 0;
    }
}
