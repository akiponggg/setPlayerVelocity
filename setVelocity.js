import { Vector, Entity } from '@minecraft/server';


//プレイヤーの速度ベクトルを書き換えられるよ
/**
 * @param {Entity} entity 
 * @param {Vector3} postVector 
 */
export function setVelocity(entity, postVector) {
    const preVector = entity.getVelocity();
    const applyVector = new Vector(
        postVector.x - preVector.x / 2,
        postVector.y - Math.min(preVector.y, 0) / 2,
        postVector.z - preVector.z / 2
    );
    const kbVector = {
        x: applyVector.x * 5 / 2,
        y: applyVector.y,
        z: applyVector.z * 5 / 2
    };
    entity.applyKnockback(kbVector.x, kbVector.z, Math.sqrt(kbVector.x * kbVector.x + kbVector.z * kbVector.z), kbVector.y );
}