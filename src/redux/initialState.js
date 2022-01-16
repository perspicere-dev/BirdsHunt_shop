import randomID from '@perspicere-dev/randomid-generator';


export const initialState = {
  posts: {
    data: {},
    loading: {
      active: false,
      error: false,
    },
  },
};

export const birds = [
  {
    id: randomID(6),
    title: 'Rainbow Parrot',
    price: 10,
    image: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    id: randomID(6),
    title: 'Erithacus rubecula',
    price: 4,
    image: 'https://images.pexels.com/photos/416179/pexels-photo-416179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  
  {
    id: randomID(6),
    title: 'Kingfisher',
    price: 4,
    image: 'https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: randomID(6),
    title: 'Cyanocitta',
    price: 4,
    image: 'https://images.pexels.com/photos/45851/bird-blue-cristata-cyanocitta-45851.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  },
  {
    id: randomID(6),
    title: 'Bombycilla garrulus',
    price: 4,
    image: 'https://images.pexels.com/photos/5754442/pexels-photo-5754442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: randomID(6),
    title: 'Cyanistes caeruleus',
    price: 4,
    image: 'https://media.istockphoto.com/photos/blue-tit-on-a-branch-picture-id466831492?k=20&m=466831492&s=612x612&w=0&h=CtpJoN2gJDYKofU37IyudXEXHXTNr3T0WQmZka8rXvQ=',
  },



];
