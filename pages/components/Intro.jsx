import { PROJECT_LINKS,DEMONSTRATION_VIDEOS } from '@/data'
import Link from 'next/link'
import React from 'react'

export default function Intro() {
  return (
    <div>
      <section id="intro">
        <h3>💎 프로젝트 소개</h3>
        <ul>
          {PROJECT_LINKS.map((link, index) => (
            <li key={index}>
              {link.title} :{" "}
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                {link.url}
              </Link>
            </li>
          ))}
        </ul>
        <h4>포트폴리오를 구해줄게!</h4>
        <p>
          <strong>
            PortForU는 포트폴리오 및 채용정보 공유 서비스로
            IT기업 합격 포트폴리오를 공유하고,
            관심사에 맞는 기업 별 채용공고 공유 서비스를 제공합니다.
          </strong>
        </p>
        <div className="demonstrationVideo">
          {DEMONSTRATION_VIDEOS.map((video, index) => (
            <div key={index} className="videoItem">
              <span className="videoTitle">{video.title}</span>
              <img src={video.src} alt={`${video.title} 시연 영상`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
