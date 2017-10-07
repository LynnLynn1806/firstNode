module.exports = {
   // mongoUri: 'mongodb://localhost/myFirstNode',
    // or use 
    mongoUri: 'mongodb://admin:password@localhost:27017/testdb1',
    debug: true,
    sessionSecret: 'dev_secret_key',
    google: {
        clientID: '197006513793-n1ifej462ibjnlfhil8ormv3m6khpi3u.apps.googleusercontent.com',
        clientSecret: 'RTSampL1JfPwOxGsT7sS-5DH',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
 }
}
