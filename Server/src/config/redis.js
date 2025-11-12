const { createClient } =  require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-18961.c305.ap-south-1-1.ec2.redns.redis-cloud.com',
        port:18961
    }
});


module.exports = redisClient;
