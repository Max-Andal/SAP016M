let db = {
  users: [
    {
      userId: "KB3G24FMZ3QEmLG4Hi3MzOhoeKn2",
      email: "user@gmail.com",
      handle: "user",
      createdAt: "2020-01-06T08:10:23.396Z",
      imageUrl: "image/dskfjsdlfjsdf/dkfjaskldfja",
      bio: "hello mi name is user, nice to meet you all",
      website: "https://user.com",
      location: "london, Uk"
    }
  ],
  screams: [
    {
      userHandle: "user",
      body: "this is the scream body",
      createdAt: "2019-12-04T11:16:28.988Z",
      likeCount: 5,
      commentCount: 2
    }
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "jasdkflasasldjf",
      body: "nice Question mate....",
      createdAt: "2019-12-04T11:16:28.988Z"
    }
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "djfkalsjdf;asljdf",
      type: "like | comment",
      createdAt: "2020-1-04T11:16:28.988Z"
    }
  ]
};

const userDetails = {
  //redux data
  credentials: {
    userId: "VfL67vvMxpZ4PBak7bDE0aL3Q5i1",
    email: "zubeir@gmail.com",
    handle: "zubeir",
    createdAt: "2020-01-06T08:24:53.765Z",
    imageUrl: "dgjfkdfdlasldakfjals",
    bio: "Hello, am user.",
    website: "https://google.com",
    location: "mogadishu, banadir"
  },
  likes: [
    {
      userHandle: "user",
      screamId: "dhfdjfakjalsjfla;sd"
    },
    {
      userHandle: "user",
      screamId: "djkadljfa;edfjsdkfj"
    }
  ]
};
