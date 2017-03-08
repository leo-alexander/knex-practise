exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 99901, name: 'Ambitious Aardvark', email: 'aardvark@example.org', url: 'www.aardvark.com', photo: 'http://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/a/aardvark_thumb.JPG'}),
        knex('users').insert({id: 99902, name: 'Bamboozled Baboon', email: 'baboon@example.org', url: 'www.baboon.com', photo: 'http://www.livescience.com/images/i/000/048/850/original/capybara-02.jpg?interpolation=lanczos-none&downsize=*:600'}),
        knex('users').insert({id: 99903, name: 'Curious Capybara', email: 'capybara@example.org', url: 'www.capybara.com', photo: 'https://img.clipartfest.com/137af78a4b8d9835db15d66ddd86fb6e_-a-baboon-doesnt-violate-baboon_1000-600.jpeg'}),
        knex('users').insert({id: 99904, name: 'Dilapidated Duck', email: 'duck@example.org', url: 'www.duck.com', photo: 'https://s-media-cache-ak0.pinimg.com/564x/d8/e4/bf/d8e4bf2dc9de3f85668dfac827b52be9.jpg'}),
        knex('users').insert({id: 99905, name: 'Exuberant Elephant', email: 'elephant@example.org', url: 'www.elephant.com', photo: 'https://i.ytimg.com/vi/ip390PwfWJU/maxresdefault.jpg'}),
        knex('users').insert({id: 99906, name: 'Fascinated Flying Fox', email: 'flying.fox@example.org', url: 'www.flyingfox.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99907, name: 'Generous Gila Monster', email: 'gila.monster@example.org', url: 'www.gilamonster.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99908, name: 'Hilarious Heron', email: 'heron@example.org', url: 'www.heron.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99909, name: 'Intransigent Impala', email: 'impala@example.org', url: 'www.impala.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99910, name: 'Jocular Jerboa', email: 'jerboa@example.org', url: 'www.jerboa.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99911, name: 'Kafkaesque Kinkajou', email: 'kinkajou@example.org', url: 'www.kinkajou.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99912, name: 'Loquacious Lemur', email: 'lemur@example.org', url: 'www.lemur.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99913, name: 'Misanthropic Mongoose', email: 'mongoose@example.org', url: 'www.mongoose.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99914, name: 'Nonchalant Nyala', email: 'nyala@example.org', url: 'www.nyala.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99915, name: 'Ornery Ocelot', email: 'ocelot@example.org', url: 'www.ocelot.com', photo: 'https://gifts.worldwildlife.org/gift-center/Images/large-species-photo/large-ocelot-photo.jpg'}),
        knex('users').insert({id: 99916, name: 'Peaceful Pangolin', email: 'panda@example.org', url: 'www.pangolin.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99917, name: 'Querulous Quokka', email: 'quokka@example.org', url: 'www.quokka.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99918, name: 'Resolute Rail', email: 'rail@example.org', url: 'www.rail.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99919, name: 'Senescent Sloth', email: 'sloth@example.org', url: 'www.sloth.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99920, name: 'Tumultuous Terrapin', email: 'terrapin@example.org', url: 'www.terrapin.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99921, name: 'Unassailable Urial', email: 'urial@example.org', url: 'www.urial.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99922, name: 'Voracious Viscacha', email: 'viscacha@example.org', url: 'www.viscacha.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99923, name: 'Wondering Wombat', email: 'wombat@example.org', url: 'www.wombat.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99924, name: 'Xenial Xerus', email: 'xerus@example.org', url: 'www.xerus.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99925, name: 'Yielding Yak', email: 'yak@example.org', url: 'www.yak.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'}),
        knex('users').insert({id: 99926, name: 'Zaftig Zebu', email: 'zebu@example.org', url: 'www.zebu.com', photo: 'https://s-media-cache-ak0.pinimg.com/736x/14/c8/b4/14c8b4bf369f5e35f7d4e5ee0d74f96a.jpg'})
      ])
    })
}
