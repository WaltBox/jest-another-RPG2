const Enemy = require('../lib/Enemy.js');

const Potion = require('../lib/Potion.js');


jest.mock('../lib/Potion.js');

test('creates an Enemy object', () => {
    const enemy = new Enemy('goblin', 'sword');

    expect(Enemy.name).toBe('goblin');
    expect(Enemy.weapon).toBe(sword);
    expect(Enemy.health).toEqual(expect.any(Number));
    expect(Enemy.strength).toEqual(expect.any(Number));
    expect(Enemy.agility).toEqual(expect.any(Number));
    expect(Enemy.potion).toEqual(expect.any(Object));
});