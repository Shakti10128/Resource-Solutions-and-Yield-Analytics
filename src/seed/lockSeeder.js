function getLockSeedData() {
  const now = Date.now();
  return {
    'table-101': {
      userId: 'user-seed-1',
      expiryTime: now + 5 * 60 * 1000
    },
    'table-102': {
      userId: 'user-seed-2',
      expiryTime: now + 10 * 60 * 1000
    },
    'table-103': {
      userId: 'user-seed-3',
      expiryTime: now + 2 * 60 * 1000
    }
  };
}

module.exports = getLockSeedData;
