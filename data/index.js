export const NAV_ITEMS = [
  { id: "intro", title: "💎 프로젝트 소개" },
  { id: "tech", title: "🛠️ 기술적 의사 결정에 따른 주요 기술" },
  { id: "trouble", title: "🛠️ 트러블 슈팅" },
  { id: "diagram", title: "🛠️ Diagram" },
];

export const PROJECT_LINKS = [
  { title: "Domain", url: "https://pinggu.vercel.app" },
  { title: "GitHub Server", url: "https://github.com/ping-goo/portforu" },
  { title: "GitHub Client", url: "https://github.com/ChungwonJ/pinggu-front" },
];

export const DIAGRAMS = [
  {
    src: "https://github.com/user-attachments/assets/d1ec172d-6256-4709-895b-de9bb65d40bd",
    caption: "Cloud Architecture",
  },
  {
    src: "https://github.com/user-attachments/assets/547e8f68-4313-4489-97b8-fee04347e446",
    caption: "CI/CD",
  },
  {
    src: "https://github.com/user-attachments/assets/38f930c8-b435-410f-a32d-b167df5312c4",
    caption: "ERD",
  },
];

export const DEMONSTRATION_VIDEOS = [
  {
    title: "포트폴리오 작성",
    src: "https://github.com/user-attachments/assets/d6b686bd-a8ef-4fa2-ad6d-fc24e1e4596a",
  },
  {
    title: "멤버쉽 구독",
    src: "https://github.com/user-attachments/assets/58db9c70-8040-4436-bf82-1f1a85f6119b",
  },
  {
    title: "포트폴리오 조회 & 댓글",
    src: "https://github.com/user-attachments/assets/536129ba-bb40-49d2-8d19-9a17a482b31a",
  },
];

export const SUMMARY_DATA = [
  { 
    icon: "📁", 
    label: "프로젝트 1", 
    content: "Kotlin 기반 크롤러 → 크롤링된 JobPosting 데이터를 DB에 저장" 
  },
  { 
    icon: "📁", 
    label: "프로젝트 2", 
    content: "Spring Boot 기반 메인 서비스 → 검색 기능 및 Elasticsearch 연동" 
  },
  { 
    icon: "🗄️", 
    label: "DB", 
    content: "공용 DB 사용 (job_postings 테이블 공유)" 
  },
  { 
    icon: "🔍", 
    label: "Elasticsearch 적용", 
    content: "메인 서비스에만 연동되어 있음 {code:JobPostingSearchService} 내 색인/검색 처리" 
  },
  { 
    icon: "❓", 
    label: "문제", 
    content: "크롤러가 ES에 직접 저장하지 않기 때문에 ES 색인 누락 발생", 
    isIssue: true 
  },
];

export const SOLUTION_DATA = [
  {
    title: "메인 앱에서 일정 주기로 DB → ES 재인덱싱",
    features: [
      "메인 앱이 일정 간격으로 DB에서 {code:JobPosting} 을 조회 후 Elasticsearch에 동기화",
      "크롤러는 수정 없이 유지 가능"
    ],
    drawback: "실시간 반영은 어려움"
  },
  {
    title: "크롤러에서 메인 앱에 API 요청 (Push 방식)",
    features: [
      "크롤링이 끝난 후, 메인 서비스의 {code:/es-sync} 등의 엔드포인트에 POST 요청"
    ],
    drawback: "실시간 색인 가능하지만, 네트워크 연결 및 API 스펙 관리 필요"
  },
  {
    title: "크롤러에도 Elasticsearch 연동 (Shared Module 방식)",
    features: [
      "크롤러와 메인 서비스가 {code:JobPostingDocument} 및 검색 서비스를 공용 모듈로 공유",
      "양쪽에서 동일한 방식으로 색인 가능"
    ],
    drawback: "모듈 복잡도 증가, 종속성 관리 필요"
  }
];

export const IMPLEMENTATION_DATA = [
  "{code:JobPosting} 엔티티에 {code:indexed: Boolean} 컬럼을 추가하여 색인 상태를 관리",
  "Spring의 {code:@Scheduled} 어노테이션을 활용해 주기적으로 색인되지 않은 데이터 조회 및 Elasticsearch 색인 실행",
  "동시 실행 방지를 위해 {code:AtomicBoolean} 플래그를 도입하여 스케줄러 중복 실행 방지 처리",
  "크롤러는 기존대로 DB에 저장만 수행하며, 색인 동기화는 메인 서비스가 책임지는 구조"
];

export const CONCLUSION_DATA = [
  {
    id: 1,
    content: "크롤링된 {code:JobPosting} 데이터가 Elasticsearch에 반영되지 않던 문제는 메인 서비스 내 스케줄러 기반의 재색인 방식으로 해결",
    subItems: [
      "크롤러 수정 없이도 Elasticsearch 색인 누락 문제 해결",
      "메인 서비스가 색인 책임을 갖되, 데이터 일관성과 상태 관리({code:indexed})가 가능",
      "동시성 안전성과 실행 주기 조절이 쉬운 구조를 확보"
    ]
  },
  {
    id: 2,
    content: "실시간 반영은 어렵지만, 안정성과 구현 효율성을 고려할 때 가장 적합한 방식이라 판단",
    subItems: []
  }
];

export const TECH_DECISION_DATA = [
  {
    tech: "Oauth2",
    background: "자체 로그인 구현 시 보안 취약점 및 사용자 진입 장벽 발생 가능성",
    decision: "보안성 향상과 사용자 편의성을 위해 검증된 외부 인증 시스템 도입 결정",
    solution: "구글, 카카오, 네이버 소셜 로그인을 통해 안전하고 빠른 인증 환경 구축"
  },
  {
    tech: "Amazon S3",
    background: "서비스 내 이미지 및 정적 파일의 효율적인 저장과 배포 필요",
    decision: "서버 로컬 저장 방식의 확장성 한계를 극복하기 위해 클라우드 스토리지 채택",
    solution: "AWS S3 연동으로 고가용성 확보 및 안정적인 이미지 저장"
  },
  {
    tech: "Elasticsearch",
    background: "대량의 데이터에 대한 빠른 검색 및 형태소 분석 기반의 검색 고도화 필요",
    decision: "DB의 검색 속도 한계를 해결하기 위해 검색 전용 엔진 도입 결정",
    solution: "검색 전용 인덱스 구축 및 스케줄러 자동 색인화로 고성능 검색 제공"
  }
];