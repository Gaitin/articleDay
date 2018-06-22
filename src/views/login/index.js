/**
 *@desc
 *@author wanggaixin
 *@date 2018/5/8
 */

import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'

export default {
  data() {
    return {
      article1: {
        author: '',
        content: ''
      },
      article2: '',
      article3: ''
    }
  },
  computed: {
    ...mapState({
      userVuex: state => state.user
    }),
    ...mapGetters([
      'status'
    ])
  },
  mounted() {
    this.getDayArticle()
    this.articleDay()
    this.articleRandom()
  },
  methods: {
    // 获取每日一文
    getDayArticle() {
      let params = {
        dev: 1
      }
      this.$api.common.getDayArticle(params)
        .then(res => {
          console.log('每日一文', res)
          this.article1 = res.data
          this.article1.date.curr = `第 ${res.data.date.curr} 期`
        })
    },
    articleDay() {
      let params = {
        dev: 1,
        date: 20180615
      }
      this.$api.common.articleDay(params)
        .then(res => {
          console.log('指定日每日一文', res)
          this.article2 = res.data.content

        })
    },
    articleRandom() {
      let params = {
        dev: 1
      }
      this.$api.common.articleRandom(params)
        .then(res => {
          console.log('随机', res)
          this.article3 = res.data.content
        })
    }

  }
}
