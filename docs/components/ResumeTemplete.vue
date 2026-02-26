<script setup>
import { ref } from 'vue'
import { withBase } from 'vitepress'
import skillsData from './data/skills'
import projectsData from './data/projects'

const expandedIndex = ref(null)
function toggleExpand(index) {
  expandedIndex.value = expandedIndex.value === index ? null : index
}
</script>

<template>
  <article class="article-block">
    <div class="left-block">
      <header class="header-block">
        <div class="image-box">
          <img :src="withBase('/Img/me.jpg')" alt="Waffle's大頭貼" />
        </div>
        <h1 class="name" style="margin-top: 20px">
          <span class="en">Waffle</span>
        </h1>

        <h4 style="margin-top: 0; font-size: 16px" class="job-title">Front-End Developer</h4>
        <div class="mbti">
          <img :src="withBase('/Img/isfp3.png')" alt="#" />
        </div>
      </header>

      <!-- <hr class="divider" /> -->

      <div class="skills-block">
        <div class="skill-group" v-for="(group, i) in skillsData" :key="i">
          <h3 class="group-title">{{ group.title }}</h3>
          <div class="skill-list">
            <div
              class="skill-item"
              v-for="skill in group.items"
              :key="skill.name"
              :style="{ '--color-skill': skill.color }"
            >
              <div class="icon" v-html="skill.icon"></div>
              <span class="text">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- <hr class="divider" /> -->

      <OrgaSectionBlock title="Contact">
        <ul class="contact-box">
          <li class="contact">
            <i class="text-white fa-solid fa-phone"></i>
            <a href="tel:+886 938643321" target="_blank" rel="noopener noreferrer"
              >+886 953005292</a
            >
          </li>
          <li class="contact">
            <ElSvgIcon name="mail" />
            <a href="mailto:waffletea0702@gmail.com" target="_blank" rel="noopener noreferrer"
              >waffletea0702@gmail.com</a
            >
          </li>
          <!-- <li class="contact">
            <ElSvgIcon name="language" />
            <a href="https://www.opshell.info" target="_blank" rel="noopener noreferrer"
              >Waffle's Website</a
            >
          </li> -->
          <li class="contact">
            <ElSvgIcon name="language" />
            <a href="https://github.com/wafflefrank" target="_blank" rel="noopener noreferrer"
              >Waffle's Github</a
            >
          </li>
          <li class="contact">
            <ElSvgIcon name="location_on" />
            <a
              href="https://maps.app.goo.gl/9q1aF5LEaEihmDh37"
              target="_blank"
              rel="noopener noreferrer"
              >Taoyuan, Taiwan</a
            >
          </li>
        </ul>
      </OrgaSectionBlock>
    </div>

    <!-- 垂直分隔線 -->
    <div class="vertical-divider"></div>

    <div class="right-block">
      <h2 id="about-waffleTea" tabindex="-1">About Waffle</h2>
      <p>
        以前是IT工程師，喜歡交流與學習技術，從<span class="highlight">接案</span>與<span
          class="highlight"
          >自學</span
        >中累積前端經驗<span class="highlight">3~4年</span>， 熟練
        Vue、JavaScript、前後端串接與GCP部署，持續精進中。
      </p>

      <!-- <hr class="divider" /> -->

      <div class="section-block project-section">
        <h3 class="section-title">
          專案項目
          <span class="section-subtitle">5 項</span>
        </h3>
        <div class="accordion project-accordion" id="projectAccordion">
          <div v-for="(project, index) in projectsData" :key="project.link" class="accordion-item">
            <h2 class="accordion-header">
              <div
                class="accordion-header-row"
                :class="{ collapsed: expandedIndex !== index }"
                :aria-expanded="expandedIndex === index"
                :aria-controls="'collapse-' + index"
                :id="'heading-' + index"
                @click="toggleExpand(index)"
              >
                <div class="project-icon">
                  <span class="project-num">{{ index + 1 }}</span>
                </div>
                <div class="project-info">
                  <span class="project-name">{{ project.name }}</span>
                  <span class="project-desc">{{ project.desc }}</span>
                </div>
                <div class="project-meta">
                  <span
                    class="accordion-toggle-btn"
                    :class="{ 'is-expanded': expandedIndex === index }"
                    role="button"
                    tabindex="0"
                    @keydown.enter.prevent="toggleExpand(index)"
                    @keydown.space.prevent="toggleExpand(index)"
                    >{{ expandedIndex === index ? '收合' : '展開' }}</span
                  >
                  <a
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-link"
                    @click.stop
                  >
                    前往網站
                    <svg
                      class="project-link-icon"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </h2>
            <div
              :id="'collapse-' + index"
              class="accordion-collapse"
              :class="{ show: expandedIndex === index }"
              :aria-labelledby="'heading-' + index"
            >
              <div class="accordion-body detail-content-wrap">
                <div v-if="project.tech?.length" class="detail-row">
                  <span class="detail-label">技術：</span>
                  <span class="detail-content">{{ project.tech.join('、') }}</span>
                </div>
                <div v-if="project.packages?.length" class="detail-row">
                  <span class="detail-label">套件/工具：</span>
                  <span class="detail-content">{{ project.packages.join('、') }}</span>
                </div>
                <div v-if="project.more" class="detail-row detail-row-more">
                  <span class="detail-label">功能特色：</span>
                  <span class="detail-more-text">{{ project.more }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
@use '../.vitepress/theme/scss/mixin' as *;

.vp-doc hr {
  border: none !important;
  border-top: none !important;
}

.article-block {
  display: flex;
  width: 100%;
  max-width: 100%;
  height: 100%;
  padding: 10px 24px;
  margin: 0 auto;
  box-sizing: border-box;

  .left-block,
  .right-block {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .divider {
      display: inline-block;
      background-color: var(--vp-c-divider-1);
      width: 100%;
      height: 1px;
    }
  }

  .left-block {
    flex-shrink: 0;
    width: 300px;
    margin-right: 32px;
  }

  .right-block {
    flex: 1 1 0;
    min-width: 0;
    padding: 0 0 0 48px;
    margin-left: 0;
  }

  > .divider {
    margin: 0 20px;
  }

  h3 {
    color: var(--vp-c-text-1);
    font-family: Inter;
    font-size: 28px;
    font-weight: 500;
    font-style: normal;
    line-height: 48px;
  }

  #about-waffleTea {
    margin: 0;
    border-top: none;
  }

  p {
    /* The word "résumé" co */
    color: var(--vp-c-text-1);
    font-family: Inter;
    font-size: 20px;
    font-weight: 300;
    font-style: normal;
    line-height: 32px;
  }
}

.mbti {
  width: calc(100% - 20px);
  box-shadow: 0 0 1px 1px #eabd5b;
  transform: translate(2px);
  border-radius: 10px;
  overflow: hidden;
}

.header-block {
  display: flex;
  flex-direction: column;
  gap: 5px;

  .image-box {
    background: #d3bba4;
    width: 200px;
    height: 200px;
    @include setSize(200px, 200px);
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h1 {
    color: var(--vp-c-text-1);
    font-family: Inter;
    font-size: 36px;
    font-weight: 500;
    font-style: normal;
    line-height: 48px;

    span {
      display: block;
    }
  }

  h3 {
    color: var(--vp-c-text-1);
    font-family: Inter;
    font-size: 20px;
    font-weight: 300;
    font-style: normal;
    line-height: 32px;
  }
}

// .skills-block {
//   .section-block {
//     ~ .section-block {
//       padding-top: 1.875rem;
//       border-top: 1px solid var(--vp-c-text-1);
//       margin-top: 1.875rem;
//     }
//   }
// }
.vertical-divider {
  width: 1px;
  align-self: stretch;
  background-color: var(--vp-c-divider-1);
  opacity: 0.6;
  flex-shrink: 0;
  margin: 0 32px 0 0;
}

.skills-block {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 32px;
}

.skill-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.group-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: var(--vp-c-text-1, #ffffff);
  border-top: 2px solid var(--vp-c-divider-1);
  padding-top: 10px;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-item {
  display: inline-flex;
  align-items: center;
  border: 2px solid var(--color-skill, #ccc);
  border-radius: 6px;
  padding: 6px 10px;
  gap: 6px;
  font-size: 14px;
  color: var(--vp-c-text-1, #ffffff);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;
}

.skill-item:hover {
  transform: scale(1.06) translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.05);
  /* hover 時更亮一點 */
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-box {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .contact {
    @include setFlex(flex-start, center, 10px);
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }
}

.work-experience-block {
  @include setFlex(flex-start, flex-start, 20px, column);
  width: 100%;
}

/* 右側區塊標題（與 OrgaSectionBlock 一致） */
.section-block.section-block {
  .section-title {
    color: var(--vp-c-text-1);
    font-family: Inter, 'Noto Sans TC', sans-serif;
    font-size: 28px;
    font-weight: 500;
    line-height: 48px;
    margin: 0;
    display: flex;
    align-items: baseline;
    gap: 8px;
  }

  .section-subtitle {
    font-size: 16px;
    font-weight: 400;
    color: var(--vp-c-text-2);
  }
}

/* 專案項目：Bootstrap 5 Accordion 風格 */
.project-accordion.accordion {
  --bs-accordion-border-color: var(--vp-c-divider-1);
  --bs-accordion-btn-bg: transparent;
  --bs-accordion-active-bg: transparent;
  --bs-accordion-active-color: inherit;
}

.accordion-item {
  border: none;
  border-bottom: 1px solid var(--vp-c-divider-1);
  background: transparent;
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  margin: 0;
  border-top: none !important;
}

.accordion-header-row {
  display: grid;
  grid-template-columns: 64px 1fr auto;
  align-items: center;
  gap: 20px;
  padding: 22px 24px;
  margin: 8px 0;
  cursor: pointer;
  min-height: 72px;
  background-color: transparent;
  border: none;
  width: 100%;
  text-align: left;
  color: inherit;
  font: inherit;
  transition: background-color 0.3s ease;
  border-radius: 20px;
  box-sizing: border-box;
}

.accordion-header-row:hover {
  background-color: rgba(255, 255, 255, 0.04);
}

.accordion-header-row::after {
  display: none;
}

.project-icon {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 14px;
  border: 1px solid var(--vp-c-divider-1);
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-num {
  font-size: 24px;
  font-weight: 600;
  color: #dc8419;
}

.project-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

.project-name {
  font-size: 22px;
  font-weight: 600;
  color: #dc8419;
  font-family: Inter, 'Noto Sans TC', sans-serif;
  line-height: 1.3;
}

.project-desc {
  font-size: 16px;
  color: var(--vp-c-text-2);
  font-weight: 400;
  line-height: 1.4;
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
}

.accordion-toggle-btn {
  display: inline-block;
  padding: 8px 18px;
  font-size: 15px;
  color: var(--vp-c-text-2);
  background: transparent;
  border: 1px solid var(--vp-c-divider-1);
  border-radius: 9999px;
  cursor: pointer;
  transition:
    color 0.25s ease,
    border-color 0.25s ease;
  user-select: none;
}

.accordion-toggle-btn:hover,
.accordion-toggle-btn.is-expanded {
  color: #dc8419;
  border-color: #dc8419;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #4aa985;
  font-size: 15px;
  text-decoration: none;
}

.project-link:hover {
  text-decoration: underline;
}

.project-link-icon {
  flex-shrink: 0;
}

.accordion-collapse {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s ease-out;
}

.accordion-collapse.show {
  grid-template-rows: 1fr;
}

.accordion-body.detail-content-wrap {
  overflow: hidden;
  min-height: 0;
  padding: 0 24px 20px 88px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  transition: opacity 0.25s ease;
}

.accordion-collapse:not(.show) .accordion-body.detail-content-wrap {
  opacity: 0;
}

.accordion-collapse.show .accordion-body.detail-content-wrap {
  opacity: 1;
}

.detail-section-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 12px 0 8px 0;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--vp-c-divider-1);
}

.detail-tech-list {
  list-style: none;
  padding-left: 0;
  margin: 0 0 8px 0;
  font-size: 14px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.detail-tech-item {
  position: relative;
  padding-left: 1em;
  margin-bottom: 4px;
}

.detail-tech-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--vp-c-text-2);
}

.detail-row {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.detail-row:first-child {
  margin-top: 12px;
}

.detail-label {
  color: var(--vp-c-text-1);
  font-weight: 500;
  margin-right: 4px;
}

.detail-content {
  color: var(--vp-c-text-2);
}

.detail-more-text {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  line-height: 1.6;
}

.detail-more {
  margin: 12px 0 0 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

/* About 內文強調 */
.highlight {
  color: #dc8419;
  font-weight: 500;
}
</style>
