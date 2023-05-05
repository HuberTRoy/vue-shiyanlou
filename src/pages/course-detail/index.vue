<template>
  <div class="course-detail main-width">
    <div class="course-detail-nav">
      <span class="course-detail-nav-item">全部课程</span>
      <span class="course-detail-nav-item">新手入门</span>
      <span class="course-detail-nav-item">新手入门222</span>
    </div>
    <div class="course-detail-wrapper">
      <div class="course-detail-left">
        <div class="course-detail-info">
          <div class="course-detail-info-title">新手入门实验楼</div>

          <div class="course-detail-info-study">
            <span>9999人学过</span>
            <span>39999人评价</span>
            <span>作者：9999</span>
            <span>难度：初级</span>
            <span>综合评分：<img src="@/assets/star.svg" alt="" />9.4</span>
          </div>

          <div class="course-detail-info-desc">
            本课程为蓝桥云课新手入门指南，我们将带你了解蓝桥云课的常用功能和环境使用方法。课程将通过不同的小例子，让每位学员亲自体验到蓝桥云课线上环境的便捷性和易用性。
          </div>
        </div>

        <div class="course-detail-knowledge">
          <ul>
            <li>你将会学到</li>
          </ul>
          <div class="course-detail-knowledge-points">
            <div class="point">123123</div>
            <div class="point">123123</div>
            <div class="point">123123</div>
            <div class="point">123123</div>
            <div class="point">123123</div>
          </div>
        </div>

        <div class="course-detail-content">
          <ul>
            <li>课程内容</li>
          </ul>
          <div class="lab">
            <div
              class="lab-item"
              v-for="(courseProcess, index) in [{ type: 'classic' }]"
              :key="index"
            >
              <div class="lab-header">
                <div class="lab-text">
                  <div class="lab-text-item">
                    <img
                      v-if="courseProcess.type == 'classic'"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAipJREFUSA3tlcFrE0EUxpONNaGQpYdAEXopNHoIBjaGJEKhLRREPVkR9NKTkn+gDQiKF9H2UMhJClXosXgQSqEXqfSWbAiktOSiIAhepAjCYkOaZtPfW51QQjZtQgoFHRi+mbdvvu+9N29Yj+f/uGgV8KqAcrncNOvFRqMRBS8pew945PV6d30+XyaRSGzJeUckn8+HbdveZf9D07T3CB30QK6OBFjch2MErmgqlfriRIzAXT4EMI5j/K68e8VSqbRQqVT2//JmNSEivSHBfggIj2EYvwBL8Toi8uE8R9ci1FpjdtUYp4rQdY8LhUJEZWqa5ksa5Y3s+ZYpFotX1Dc37CgCyQsOZpkDQlAuly+TxRNq/Un2jPFarbZ9mpCrCNE+h2Sefr9Dv+8Io2VZM4LBYPCDYCgUegB8FSH8h8XWbriKEPEjpklb59RB9mnmaiQSORRbOByuktUytqtsbyi/VnS9QL/ff7tarW4T5RrleFiv10fp+wkySysS7ucW9jUCmaP9N5W9FV0zicVi3xCa5ICB0D3Ipoj4YzKZ/KxIEF1B4BkCS8rWDl0zEWcRIotr8Xi8hoAE9O4kia7rY6p0J+2t644i4iwCgtTeBmQ2x1kExNm1XE2mPiyUyE/hog31PnB6KLG8q0Gmw6vKtYHhFXVf5wG+5TJ/9yoGR4BGmeW8lFl4//xPZEE73qRbXrO8jqPzwsXe7eDuhHyPQJ/Sic031i3PP+x/DBPn3QC5lw/kAAAAAElFTkSuQmCC"
                    />
                    <img
                      v-if="courseProcess.type == 'coursed-challenge'"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAnNJREFUSA3tlTuIE2EQx7OJmwRXwUIFBV+gguhFo4E8hGijhdjYqnAoeAgenIWFyonNgY0WgmhE8MqrjxMLUVHQbNhERDByGA7sbMIpEhXz9DfLrWQfJruNzfnBMN/M/Oc/O/t9sxsK/V8B3oDixBqGkW+327P41zhjw2xFURbD4fDxdDqt92NX9Buy73Q6RwHPs73kjPmwb5N/BJytiNlJqVTa0e1285CLfQJRstnsMR+kNkixWHwKxXeccz1WNBp9kUqlFsxOKPCSQBP/T0Dr2Bu27GBGDp6d8GjNZvMaqVvDS/kbcJ7K5XK7sO8H43Sh7wgPfKPIRomaRTB6iOsSuNIDOPr5rE4WaHG7cBBcRK0MwPcHSm4MkTMJwbcF9Un2VpHH7C/WarUYwQ/INgkGXeRtQj5WKhUVPU7+M+Ewi8Tj8es4V9fr9dfoffg3l8vlPQLwu+SGgpWnH2m1Wq/gWatp2lXJN4skk8mvXLf92AbtjiFdgLcE4HdBOiV56LPot+QlE4nEF8n3PGye6gBgnekdZXpnhhUCfxr8Q8jzmUym5MRbZ2LzA3xDwhWmd1rX9XO2YJ8BsUKBMebsHu7LXgUE7tmJxQPBGYgK2M+RaVVVHzHBP6rV6qpGo3EQ8kn8MnyTzMYNK8+pBxYRMB/M3XQ0wfYkZBodttAq9i9kLhKJTPFK37H/6xpaxMqkqwnIL1BkHF1A3+T13LXig7TnmXglQNzD/w3iJ+jGku0Fdfl8F3FlBnD8kyJDz4QrfJ5Xs54zyKD3MjsFbpV8MuR3UMb/mX/Pg0GNDewEUnmIQyLsY+h5ChxGv0fkIyqxPLJM1m/AKgV8WA5+twAAAABJRU5ErkJggg=="
                    />
                  </div>
                  <div class="lab-text-item">123</div>

                  <div class="lab-text-item">4123</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="course-detail-teacher">
          <ul>
            <li>课程教师</li>
          </ul>
          <div class="course-detail-teacher-info">
            <div class="base">
              <img src="123" class="avatar" />
              <div class="history-wrapper">
                <span class="name">
                  xyz
                  <span class="history">共发表过123门课程</span>
                </span>
                <span class="lookup"> 查看老师的所有课程 > </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="course-detail-right">
        <img class="course-cover" src="@/assets/1.png" />
        <div class="course-info">
          <div class="course-info-bootcamp">
            <p class="price">￥999</p>
            <div class="bootcamp-info">
              <span>开通学习会员，立享免费学</span>
              <a
                href="https://www.lanqiao.cn/vip?member_type=premium"
                target="_blank"
                class="purchase"
                >去开通</a
              >
            </div>
          </div>
        </div>

        <button class="purchase-button">立即购买</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.course-detail {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 10px;
  &-nav {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #666;
    margin-bottom: 10px;

    &-item {
      cursor: pointer;
      & + .course-detail-nav-item {
        margin-left: 7px;

        &::before {
          content: " / ";
          margin-right: 5px;
        }
      }

      &:last-child {
        color: #6c757d;
      }
    }
  }

  &-wrapper {
    display: flex;
    width: 100%;
  }

  &-left {
    width: 75%;
  }

  &-info {
    display: flex;
    flex-direction: column;
    background: #fff;
    border: 1px solid #eee;
    margin-bottom: 10px;
    padding: 30px 30px 20px;

    &-title {
      color: #565656;
      font-weight: 500;
      line-height: 1.6;
      margin: 0 10px 0 0;
      font-size: 22px;
    }

    &-study {
      color: #a4a4a4;
      font-size: 14px;
      display: flex;
      align-items: center;

      span + span {
        margin-left: 12px;
      }
    }

    &-desc {
      letter-spacing: 1px;
      margin-bottom: 10px;
      margin-top: 10px;
    }
  }

  &-knowledge {
    background: #fff;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin-bottom: 10px;

    ul {
      margin-bottom: 10px;
      border: none;
      border-bottom: 1px solid #eee;
      display: flex;

      li {
        color: #565656;
        font-weight: 500;
        font-size: 20px;
        padding-bottom: 5px;
      }
    }

    &-points {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 20px 0;
      background: #f7f7f7;
      font-size: 16px;
      font-weight: 500;
      color: #565656;

      .point {
        width: 50%;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 15px;

        &::before {
          content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAAAAXNSR0IArs4c6QAAAPdJREFUKBVjYCATcO2fbMJ7eIoaSDsjOWaADPjP+G83UPs39v+82kykGgIz4P9/BgGG///7PzgmfiDJJcgGADWWfnfM7wE5gplYl3Adnmj8////PSAXIBsA0k+Ud8AG/GXcjc0AsCEyx1Zxch6YXAi0BavXuA5NMfoPNuC/ILoLYL5gevPzRf/////6OA9OnoNuENiAf/+AXsBtANglTKyMTQyMjLeAIZ2EbBCxBoAMAXuB68hkqX9//u8HGqQGNHAeE/P/af//MuwChoEQLi/AvAI3BMRANYjhD8N/BhZiDEAxBN0gYg0A6cMAIBdxHZycjCGBRwAAC7SWSWFuSDoAAAAASUVORK5CYII=);
          margin-right: 15px;
        }
      }
    }
  }

  &-content {
    background: #fff;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    padding: 30px;

    ul {
      margin-bottom: 10px;
      border: none;
      border-bottom: 1px solid #eee;
      display: flex;

      li {
        color: #565656;
        font-weight: 500;
        font-size: 20px;
        padding-bottom: 5px;
      }
    }

    .lab {
      display: flex;
      flex-direction: column;

      &-item {
        border: 1px solid #eee;
        margin: 12px 0;
      }

      &-header {
        background: #f7f7f7;
        border-bottom: 1px solid #eee;
        padding-right: 10px;
        height: 55px;
        display: flex;
        justify-content: space-between;
      }

      &-text {
        display: flex;
        align-items: center;

        &-item {
          margin: 0 12px;
          padding: 14px 0;
          font-size: 16px;
          color: #999;
        }
      }
    }
  }

  &-teacher {
    background: #fff;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin-top: 10px;
    margin-bottom: 10px;

    &-info {
      padding-top: 5px;
      margin-top: 20px;

      ul {
        margin-bottom: 10px;
        border: none;
        border-bottom: 1px solid #eee;
        display: flex;

        li {
          color: #565656;
          font-weight: 500;
          font-size: 20px;
          padding-bottom: 5px;
        }
      }
    }

    .base {
      display: flex;

      .avatar {
        height: 70px;
        width: 70px;
        border-radius: 50%;
        margin-right: 20px;
      }

      .history-wrapper {
        display: flex;
        flex-direction: column;

        .name {
          display: block;
          font-size: 15px;
          margin-bottom: 10px;
        }

        .history {
          color: #999;
          font-size: 12px;
        }

        .lookup {
          font-size: 14px;
          color: #999;
        }
      }
    }
  }

  &-right {
    margin-left: 15px;
    width: 315px;
    background: #fff;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    height: 500px;

    .course {
      &-cover {
        padding: 5px 5px 0;
        width: 100%;
      }

      &-info {
        padding: 14px 14px 5px;
        font-size: 16px;
        font-weight: 500;
        color: #333;

        &-bootcamp {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          position: relative;
        }

        .price {
          color: #f66;
          font-weight: 700;
          font-size: 24px;
        }

        .bootcamp-info {
          display: flex;
          justify-content: space-between;
          background: #f9f9f9;
          padding: 4px 8px;
          font-size: 12px;
          margin: 14px 0;
        }
      }
    }

    .purchase-button {
      background-color: #f66;
      border-color: #f66;
      border: 1px solid transparent;
      border-radius: 4px;
      color: #fff;
      display: inline-block;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      text-align: center;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      user-select: none;
      vertical-align: middle;
      cursor: pointer;
      padding: 12px 9px;
      margin: 0 14px;
    }
  }
}
</style>
