const tweets = [
  {
    id: '1',
    text: 'Привет! Без обид, но я не работаю в команде. #best',
    createdAt: new Date('2022-03-09T14:20:00'),
    author: 'Tony Stark',
    comments: [
      {
        id: '11',
        text: 'Да. Парень в бронированном костюме. А снять — кто ты без него?',
        createdAt: new Date('2022-03-09T14:22:05'),
        author: 'Captain America',
      },
      {
        id: '12',
        text: 'Гений, миллиардер, плэйбой, филантроп!',
        createdAt: new Date('2022-03-09T14:24:00'),
        author: 'Tony Stark',
      },
    ],
  },
  {
    id: '2',
    text: 'Победить своих демонов невозможно. Можно лишь не делать себя их рабом.',
    createdAt: new Date('2022-03-09T16:00:01'),
    author: 'Doctor Strange',
    comments: [],
  },
  {
    id: '3',
    text: 'Я опять с вами! #front-end',
    createdAt: new Date('2022-03-10T08:00:00'),
    author: 'Peter Parker',
    comments: [
      {
        id: '31',
        text: 'Главное, не делай глупостей, договорились?',
        createdAt: new Date('2022-03-10T09:00:05'),
        author: 'Tony Stark',
      },
      {
        id: '32',
        text: 'Привет!',
        createdAt: new Date('2022-03-10T09:00:25'),
        author: 'Black Widow',
      },
    ],
  },
  {
    id: '4',
    text: 'Я Тор, сын Одина, и покуда в груди моей бьётся сердце, я... не мастер долгих и занудных речей.',
    createdAt: new Date('2022-03-08T12:00:00'),
    author: 'Tor',
    comments: [],
  },
  {
    id: '5',
    text: 'Халк...Крушить! #js',
    createdAt: new Date('2022-03-12T11:10:00'),
    author: 'Halk',
    comments: [
      {
        id: '51',
        text: 'Эй, малыш, скоро солнце зайдет! #calm',
        createdAt: new Date('2022-03-12T11:15:25'),
        author: 'Black Widow',
      },
    ],
  },
  {
    id: '6',
    text: 'В трудные времена мудрые строят мосты, а глупцы — стены. #datamola',
    createdAt: new Date('2022-03-05T15:05:00'),
    author: 'Black Panther',
    comments: [],
  },
  {
    id: '7',
    text: 'Заявляю как человек, который тебя любил: у тебя жених — олень.',
    createdAt: new Date('2022-03-15T11:25:00'),
    author: 'Ant-Man',
    comments: [],
  },
  {
    id: '8',
    text: 'Глаза, лёгкие, желудок, так бы и съел, да времени в обрез.',
    createdAt: new Date('2022-03-02T17:10:00'),
    author: 'Venom',
    comments: [
      {
        id: '81',
        text: 'Даже я веду себя приличнее!',
        createdAt: new Date('2022-03-02T17:45:00'),
        author: 'Deadpool',
      },
    ],
  },
  {
    id: '9',
    text: 'Внешность — это всего лишь фантик, а конфетки под ней бывают всякие. #appearance',
    createdAt: new Date('2022-03-13T08:15:00'),
    author: 'Wolverine',
    comments: [
      {
        id: '91',
        text: 'Ты на кого намекаешь??',
        createdAt: new Date('2022-03-13T08:23:00'),
        author: 'Loki',
      },
    ],
  },
  {
    id: '10',
    text: 'Было весело! #datamola',
    createdAt: new Date('2022-03-07T14:42:00'),
    author: 'Black Widow',
    comments: [
      {
        id: '101',
        text: 'Это я еще не шутил))',
        createdAt: new Date('2022-03-07T15:02:00'),
        author: 'Deadpool',
      },
    ],
  },
  {
    id: '11',
    text: 'Я Есть Грут #name',
    createdAt: new Date('2022-03-09T14:56:00'),
    author: 'Groot',
    comments: [
      {
        id: '111',
        text: 'Я Есть Стив Роджерс)',
        createdAt: new Date('2022-03-09T15:12:00'),
        author: 'Deadpool',
      },
    ],
  },
  {
    id: '12',
    text: 'Не наделай глупостей, пока меня не будет. #js',
    createdAt: new Date('2022-02-25T08:00:00'),
    author: 'Bucky Barnes',
    comments: [
      {
        id: '121',
        text: 'Не наделаю — все глупости останутся с тобой.',
        createdAt: new Date('2022-02-25T08:02:00'),
        author: 'Captain America',
      },
    ],
  },
  {
    id: '13',
    text: 'Скажу только раз... #count',
    createdAt: new Date('2022-02-24T14:34:00'),
    author: 'Captain America',
    comments: [
      {
        id: '131',
        text: 'Что так много?',
        createdAt: new Date('2022-02-24T14:48:00'),
        author: 'Tony Stark',
      },
    ],
  },
  {
    id: '14',
    text: 'Только умный мужчина станет делать вид, что глуп. И глупа та женщина, что не сумеет этого распознать. #woman',
    createdAt: new Date('2022-03-10T12:17:00'),
    author: 'Daredevil',
    comments: [
      {
        id: '141',
        text: 'Тонко)',
        createdAt: new Date('2022-03-10T12:25:00'),
        author: 'Black Widow',
      },
    ],
  },
  {
    id: '15',
    text: 'С великой силой приходит великая безответственность. #power',
    createdAt: new Date('2022-03-15T11:35:12'),
    author: 'Deadpool',
    comments: [
      {
        id: '151',
        text: 'Ничего не перепутал?)',
        createdAt: new Date('2022-03-15T11:38:12'),
        author: 'Black Widow',
      },
    ],
  },
  {
    id: '16',
    text: 'Любой, кто может продать душу во имя любви, способен изменить мир! #love',
    createdAt: new Date('2022-03-09T07:17:10'),
    author: 'Ghost Rider',
    comments: [],
  },
  {
    id: '17',
    text: 'Он никогда раньше не подводил. #men',
    createdAt: new Date('2022-03-05T23:02:00'),
    author: 'Loki',
    comments: [
      {
        id: '171',
        text: 'С мужиками такое случается!',
        createdAt: new Date('2022-02-05T23:08:00'),
        author: 'Tony Stark',
      },
      {
        id: '172',
        text: 'Lol',
        createdAt: new Date('2022-03-05T23:18:00'),
        author: 'Black Widow',
      },
    ],
  },
  {
    id: '18',
    text: 'Легко обманывать тех, чья жизнь сплошной самообман. #lie',
    createdAt: new Date('2022-03-06T15:39:50'),
    author: 'Mysterio',
    comments: [
      {
        id: '181',
        text: 'Больше ты меня не проведешь!!!',
        createdAt: new Date('2022-03-06T15:42:50'),
        author: 'Peter Parker',
      },
    ],
  },
  {
    id: '19',
    text: 'Гораздо проще представить себе, что ты паришь над облаками и другие тобой восхищаются, чем представить, каково это - восхищаться самой собой. #admiration',
    createdAt: new Date('2022-03-01T18:18:00'),
    author: 'Captain Marvel',
    comments: [],
  },
  {
    id: '20',
    text: 'Твой план не подвёл. #plan',
    createdAt: new Date('2022-02-09T15:00:00'),
    author: 'Hawkeye',
    comments: [
      {
        id: '201',
        text: 'У нас был план???',
        createdAt: new Date('2022-02-09T17:00:00'),
        author: 'Black Widow',
      },
    ],
  },
];

const module = (function () {
  // let user = 'Nicholas Fury';
  let user = 'Captain Marvel';
  function validateComm(arr, val) {
    if (
      arr.includes('id') &&
      val.id.length > 0 &&
      typeof val.id === 'string' &&
      arr.includes('text') &&
      val.text.length > 0 &&
      typeof val.text === 'string' &&
      arr.includes('createdAt') &&
      val.createdAt instanceof Date &&
      arr.includes('author') &&
      val.author.length > 0 &&
      typeof val.author === 'string'
    ) {
      return true;
    } else {
      return false;
    }
  }

  function validate(arr, val) {
    if (arr.includes('comments') && Array.isArray(val.comments)) {
      return validateComm(arr, val);
    } else {
      return false;
    }
  }

  return {
    getTweets: function (skip = 0, top = 10, filterConfig = null) {
      const sortTweets = tweets
        .slice()
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(skip, skip + top);
      if (filterConfig === null) {
        return sortTweets;
      } else {
        return sortTweets.filter((el) =>
          Object.keys(filterConfig).every((key) =>
            el[key].includes(filterConfig[key])
          )
        );
      }
    },
    getTweet: function (id) {
      return tweets.find((el) => el.id === id);
    },
    validateTweet: function (tw) {
      const val = tweets[tw - 1];
      const arr = Object.keys(val);
      return validate(arr, val);
    },
    addTweet: function (text) {
      const obj = new Object();
      const arrId = [];
      tweets.forEach((el) => arrId.push(el.id));
      function getRandomInt() {
        let num = Math.floor(1 + Math.random() * 1000);
        num = String(num);
        if (arrId.includes(num)) {
          getRandomInt();
        } else {
          obj.id = num;
        }
      }
      getRandomInt();
      obj.text = text;
      obj.createdAt = new Date();
      obj.author = user;
      obj.comments = [];
      tweets.push(obj);

      if (this.validateTweet(tweets.length)) {
        return true;
      } else {
        return false;
      }
    },

    editTweet: function (id, text) {
      const obj = this.getTweet(id);
      if (obj.author !== user) {
        return false;
      } else {
        obj.text = text;
        if (this.validateTweet(tweets.indexOf(obj) + 1)) {
          return true;
        } else {
          return false;
        }
      }
    },
    removeTweet: function (id) {
      const obj = this.getTweet(id);
      if (obj.author === user) {
        tweets.splice(tweets.indexOf(obj), 1);
        return true;
      } else {
        return false;
      }
    },
    validateComment: function (com) {
      const val = tweets[com - 1].comments[0];
      const arr = Object.keys(val);
      if (validateComm(arr, val)) {
        return true;
      } else {
        return false;
      }
    },
  };
})();

// console.log(module.getTweets(1, 3, { author: 'Halk' }));

// console.log(module.getTweet('5'));

// console.log(module.validateTweet(20));

// console.log(
//   module.addTweet(
//     'Человек может всё, когда он понимает, что он — часть чего-то большего.'
//   )
// );

// console.log(module.editTweet('19', 'fffff'));

// console.log(module.removeTweet('19'));

console.log(module.validateComment(20));

console.log(tweets);