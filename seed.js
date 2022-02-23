const { db } = require('./Avatar/server/db');
const { Air, Water, Earth, Fire } = require('./Avatar/server/db/index');

const seed = async () => {
  try {
    await db.sync({ force: true });

    // AIR
    const air1 = await Air.create({
      question: 'You would describe yourself as a spiritual person',
      score: 1,
    });

    const air2 = await Air.create({
      question: 'You are a glass half full person',
      score: 1,
    });

    const air3 = await Air.create({
      question: 'You prize freedom',
      score: 1,
    });

    const air4 = await Air.create({
      question: 'You are a caring and patient person',
      score: 1,
    });

    const air5 = await Air.create({
      question: 'You prefer to settle conflict with words',
      score: 1,
    });

    const air6 = await Air.create({
      question: 'You think before you act',
      score: 1,
    });

    const air7 = await Air.create({
      question: 'Your friends describe you as a gentle soul',
      score: 1,
    });

    const air8 = await Air.create({
      question: 'You love to laugh and make others laugh',
      score: 1,
    });

    const air9 = await Air.create({
      question: 'You prefer to be on the defensive rather than the offensive',
      score: 1,
    });

    const air10 = await Air.create({
      question: 'You try to live ethically and protect others',
      score: 1,
    });

    // WATER 
    const water1 = await Water.create({
      question: 'You find change to be easy to navigate',
      score: 1,
    });

    const water2 = await Water.create({
      question: 'When faced with a difficult problem you feel you can move through it with ease and fluidity',
      score: 1,
    });

    const water3 = await Water.create({
      question: 'You prefer moonlight over sunlight',
      score: 1,
    });

    const water4 = await Water.create({
      question: 'You feel you have a wide deep range of emotions',
      score: 1,
    });

    const water5 = await Water.create({
      question: 'You enjoy swimming or water activities',
      score: 1,
    });

    const water6 = await Water.create({
      question: 'You feel a need for justice or to protect others',
      score: 1,
    });

    const water7 = await Water.create({
      question: 'You feel your mood can be affected by planets and moon positioning',
      score: 1,
    });

    const water8 = await Water.create({
      question: 'You care deeply for others',
      score: 1,
    });

    const water9 = await Water.create({
      question: 'You would describe yourself as a healer or mediator',
      score: 1,
    });

    const water10 = await Water.create({
      question: 'You would say you have an open heart despite any past pain',
      score: 1,
    });

    // EARTH
    const earth1 = await Earth.create({
      question: 'Your friends describe you as a grounded person',
      score: 1,
    });

    const earth2 = await Earth.create({
      question: 'You have a great amount of self-control',
      score: 1,
    });

    const earth3 = await Earth.create({
      question: 'You would say that you plan for the worst, but hope for the best',
      score: 1,
    });

    const earth4 = await Earth.create({
      question: 'You stand your ground for your beliefs',
      score: 1,
    });

    const earth5 = await Earth.create({
      question: 'You are a very loyal person',
      score: 1,
    });

    const earth6 = await Earth.create({
      question: "You can often be stubborn and don't change course easily",
      score: 1,
    });

    const earth7 = await Earth.create({
      question: 'You are a pragmatic glass half empty kind of person',
      score: 1,
    });

    const earth8 = await Earth.create({
      question: 'You thrive best with a structured routine rather than unstructured time',
      score: 1,
    });

    const earth9 = await Earth.create({
      question: 'You prefer the comfort of your home and a few close friends',
      score: 1,
    });

    const earth10 = await Earth.create({
      question: 'You would describe yourself as an introvert',
      score: 1,
    });

    // FIRE
    const fire1 = await Fire.create({
      question: 'You feel that you anger easily',
      score: 1,
    });

    const fire2 = await Fire.create({
      question: 'You feel you take pride in everything you do, no mater how small',
      score: 1,
    });

    const fire3 = await Fire.create({
      question: 'You rarely back down from confrontation',
      score: 1,
    });

    const fire4 = await Fire.create({
      question: 'You have strong beliefs and convictions and you try to always uphold them',
      score: 1,
    });

    const fire5 = await Fire.create({
      question: 'Family is important to you',
      score: 1,
    });

    const fire6 = await Fire.create({
      question: 'You enjoy competition and winning',
      score: 1,
    });

    const fire7 = await Fire.create({
      question: 'Friends describe you as stubborn or impatient',
      score: 1,
    });

    const fire8 = await Fire.create({
      question: "You aren't afraid to speak your truth",
      score: 1,
    });

    const fire9 = await Fire.create({
      question: 'You are passionate and come up with creative solutions',
      score: 1,
    });

    const fire10 = await Fire.create({
      question: 'You would rather be on the offensive than the defensive',
      score: 1,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;