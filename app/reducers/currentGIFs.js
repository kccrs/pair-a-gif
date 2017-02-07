import { GET_GIPHYS } from '../actions/actionTypes';

const initialState = [
  {
    "data": [
      {
        "type": "gif",
        "id": "iuHaJ0D7macZq",
        "slug": "cat-day-tomorrow-iuHaJ0D7macZq",
        "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
        "bitly_gif_url": "http://gph.is/2fQi2S0",
        "bitly_url": "http://gph.is/2fQi2S0",
        "embed_url": "http://giphy.com/embed/iuHaJ0D7macZq",
        "username": "",
        "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
        "rating": "pg",
        "content_url": "",
        "source_tld": "www.reddit.com",
        "source_post_url": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
        "is_indexable": 0,
        "import_datetime": "2016-11-26 17:30:14",
        "trending_datetime": "2016-11-27 21:30:01",
        "images": {
          "fixed_height": {
            "url": "http://media1.giphy.com/media/iuHaJ0D7macZq/200.gif",
            "width": "364",
            "height": "200",
            "size": "1833584",
            "mp4": "http://media1.giphy.com/media/iuHaJ0D7macZq/200.mp4",
            "mp4_size": "98752",
            "webp": "http://media1.giphy.com/media/iuHaJ0D7macZq/200.webp",
            "webp_size": "501764"
          },
          "fixed_height_still": {
            "url": "http://media1.giphy.com/media/iuHaJ0D7macZq/200_s.gif",
            "width": "364",
            "height": "200",
            "size": "44279"
          },
          "fixed_height_downsampled": {
            "url": "http://media1.giphy.com/media/iuHaJ0D7macZq/200_d.gif",
            "width": "364",
            "height": "200",
            "size": "275020",
            "webp": "http://media1.giphy.com/media/iuHaJ0D7macZq/200_d.webp",
            "webp_size": "69740"
          },
          "fixed_width": {
            "url": "http://media1.giphy.com/media/iuHaJ0D7macZq/200w.gif",
            "width": "200",
            "height": "110",
            "size": "636819",
            "mp4": "http://media1.giphy.com/media/iuHaJ0D7macZq/200w.mp4",
            "mp4_size": "43693",
            "webp": "http://media1.giphy.com/media/iuHaJ0D7macZq/200w.webp",
            "webp_size": "220618"
          },
          "fixed_width_still": {
            "url": "http://media1.giphy.com/media/iuHaJ0D7macZq/200w_s.gif",
            "width": "200",
            "height": "110",
            "size": "16752"
          },
          "fixed_width_downsampled": {
            "url": "http://media1.giphy.com/media/iuHaJ0D7macZq/200w_d.gif",
            "width": "200",
            "height": "110",
            "size": "99849",
            "webp": "http://media1.giphy.com/media/iuHaJ0D7macZq/200w_d.webp",
            "webp_size": "30142"
          },
          "fixed_height_small": {
            "url": "http://media1.giphy.com/media/iuHaJ0D7macZq/100.gif",
            "width": "182",
            "height": "100",
            "size": "512524",
            "mp4": "http://media1.giphy.com/media/iuHaJ0D7macZq/100.mp4",
            "mp4_size": "41383",
            "webp": "http://media1.giphy.com/media/iuHaJ0D7macZq/100.webp",
            "webp_size": "183748"
          },
          "fixed_height_small_still": {
            "url": "http://media1.giphy.com/media/iuHaJ0D7macZq/100_s.gif",
            "width": "182",
            "height": "100",
            "size": "13811"
          },
          "fixed_width_small": {
            "url": "http://media1.giphy.com/media/iuHaJ0D7macZq/100w.gif",
            "width": "100",
            "height": "55",
            "size": "186756",
            "mp4": "http://media1.giphy.com/media/iuHaJ0D7macZq/100w.mp4",
            "mp4_size": "20374",
            "webp": "http://media1.giphy.com/media/iuHaJ0D7macZq/100w.webp",
            "webp_size": "88508"
          },
          "fixed_width_small_still": {
            "url": "http://media1.giphy.com/media/iuHaJ0D7macZq/100w_s.gif",
            "width": "100",
            "height": "55",
            "size": "5751"
          },
          "downsized": {
            "url": "http://media1.giphy.com/media/iuHaJ0D7macZq/giphy-downsized.gif",
            "width": "250",
            "height": "137",
            "size": "838581"
          },
          "downsized_still": {
            "url": "http://media1.giphy.com/media/iuHaJ0D7macZq/giphy-downsized_s.gif",
            "width": "250",
            "height": "137",
            "size": "21779"
          },
          "downsized_large": {
            "url": "http://media1.giphy.com/media/iuHaJ0D7macZq/giphy.gif",
            "width": "480",
            "height": "264",
            "size": "3001119"
          },
          "downsized_medium": {
            "url": "http://media1.giphy.com/media/iuHaJ0D7macZq/giphy.gif",
            "width": "480",
            "height": "264",
            "size": "3001119"
          },
          "original": {
            "url": "http://media1.giphy.com/media/iuHaJ0D7macZq/giphy.gif",
            "width": "480",
            "height": "264",
            "size": "3001119",
            "frames": "45",
            "mp4": "http://media1.giphy.com/media/iuHaJ0D7macZq/giphy.mp4",
            "mp4_size": "166937",
            "webp": "http://media1.giphy.com/media/iuHaJ0D7macZq/giphy.webp",
            "webp_size": "755462",
            "hash": "dee8431bc46276de07b846a3a1f87698"
          },
          "original_still": {
            "url": "http://media1.giphy.com/media/iuHaJ0D7macZq/giphy_s.gif",
            "width": "480",
            "height": "264",
            "size": "70262"
          },
          "looping": {
            "mp4": "http://media1.giphy.com/media/iuHaJ0D7macZq/giphy-loop.mp4",
            "mp4_size": "747886"
          },
          "preview": {
            "mp4": "http://media1.giphy.com/media/iuHaJ0D7macZq/giphy-preview.mp4",
            "mp4_size": "34222",
            "width": "344",
            "height": "188"
          },
          "downsized_small": {
            "mp4": "http://media1.giphy.com/media/iuHaJ0D7macZq/giphy-downsized-small.mp4",
            "mp4_size": "166937"
          }
        }
      }
    ],
      "meta": {
        "status": 200,
        "msg": "OK",
        "response_id": "58981b7028a5be6c8a76451a"
      },
      "pagination": {
        "total_count": 6478,
        "count": 25,
        "offset": 0
      }
  }
];

const currentGIFs = (state = initialState, action) => {
  switch (action.type) {
    case GET_GIPHYS:
      return action.data
    default:
      return state
  }
}

export default currentGIFs;
