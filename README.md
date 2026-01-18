# Mobile Front

React Native 및 Expo를 사용한 모바일 클라이언트 애플리케이션입니다.

## 요구사항

프로젝트를 실행하기 전에 다음 도구들이 설치되어 있어야 합니다:

- **Node.js**: v18.0.0 이상 (권장: v20.x 또는 v24.x)
- **npm**: v9.0.0 이상 (권장: v10.x 이상)
- **Expo 계정**: [expo.dev](https://expo.dev)에서 무료 계정 생성 필요
- **Expo Go 앱**:
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

### 주요 의존성 버전

```json
{
  "expo": "~54.0.29",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "typescript": "~5.9.2"
}
```

## 시작하기

### 1. 저장소 클론

```bash
git clone https://github.com/recommerce-side-project/mobile-front.git
cd mobile-front
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 시작

```bash
npm start
```

또는

```bash
npx expo start
```

개발 서버가 시작되면 터미널에서 **`s` 키를 눌러 Expo Go 모드로 전환**하세요.

### 4. Expo Go로 앱 실행

개발 서버가 시작되면 터미널에 QR 코드가 표시됩니다.

**iOS (iPhone/iPad):**

1. 카메라 앱을 열고 QR 코드를 스캔
2. 알림을 탭하여 Expo Go에서 열기

**Android:**

1. Expo Go 앱을 열기
2. 'Scan QR Code' 탭하여 스캔

## 개발 명령어

| 명령어            | 설명                                      |
| ----------------- | ----------------------------------------- |
| `npm start`       | Metro bundler와 개발 서버 시작            |
| `npm run android` | Android 에뮬레이터에서 앱 실행            |
| `npm run ios`     | iOS 시뮬레이터에서 앱 실행 (macOS만 가능) |
| `npm run web`     | 웹 브라우저에서 앱 실행                   |

## 확인 사항 - 네트워크 연결

동일한 Wi-Fi 네트워크에 모바일 기기와 개발 PC가 연결되어 있어야 합니다.

네트워크 연결이 불가능한 경우:

- `npx expo start --tunnel` 명령을 사용하여 터널 모드로 실행

## 문제 해결

### 캐시 초기화

```bash
npx expo start --clear
```

### 의존성 재설치

**macOS/Linux:**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Windows (PowerShell):**

```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

**Windows (CMD):**

```cmd
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Metro bundler 포트 변경

```bash
npx expo start --port 8081
```

## 프로젝트 구조

```
mobile-front/
├── src/
│   ├── App.tsx           # 루트 컴포넌트
│   ├── api/              # API 클라이언트 및 서비스
│   ├── assets/           # 이미지, 폰트 등 정적 파일
│   ├── components/       # 재사용 가능한 컴포넌트
│   ├── hooks/            # 커스텀 React Hooks
│   ├── navigations/      # 네비게이션 설정
│   ├── screens/          # 화면 컴포넌트
│   ├── stores/           # 상태 관리 (Zustand, Redux 등)
│   ├── styles/           # 공통 스타일 및 테마
│   ├── types/            # TypeScript 타입 정의
│   └── utils/            # 유틸리티 함수
├── .gitignore            # Git 제외 파일 목록
├── app.json              # Expo 설정 파일
├── eas.json              # EAS Build 설정
├── index.ts              # 앱 진입점
├── package.json          # 프로젝트 의존성
└── tsconfig.json         # TypeScript 설정
```

## EAS Build (프로덕션 빌드)

EAS를 사용한 프로덕션 빌드는 별도의 Expo 계정이 필요합니다.

```bash
# EAS CLI 설치 (전역)
npm install -g eas-cli

# 로그인
eas login

# 프로젝트 설정
eas build:configure

# 빌드 실행
eas build --platform android
eas build --platform ios
```

## Git 전략

![git전략](https://github.com/user-attachments/assets/e71b4d54-7272-44c6-b77a-530bc43feb64)

- Develop는 여러 feature 브랜치가 합쳐지는 구간이며 변경 사항 업데이트가 필요할 때 feature가 아닌 develop에서 pull을 받습니다.
- rebase는 하지 않고 merge를 합니다. 커밋 최적화가 필요하면 `git merge --squash` 를 합니다.
- 브랜치명은 기능별로 작성합니다.
  예시) feat/layout, feat/main-page

### Git Commit Message-prefix 규칙

- 커밋 메시지는 작업 내용을 한글로 작성하며 직관적이면서 상세히 작성합니다.
- 메시지 형식은 `접두어: 커밋메시지` 로 통일합니다.
- 작업 내용에 따라 아래 prefix를 적용합니다.

#### Message Prefix

- feat: 새로운 기능을 추가할 경우. ex)
  `feat: navigation bar 생성`
- fix: 버그를 고친 경우. ex) `fix: database 연결 에러 수정`
- chore: 빌드 테스트 , 업데이트 , 패키지 매니저를 설정하는 경우(프로덕션 코드 변경X) or 불필요한 코드 제거 등 위의 2가지를 제외한 경우. ex) `chore: 불필요한 import문 제거`
- merge: 머지 커밋.
- refactor: 프로덕션 코드 리팩토링, 새로운 기능이나 버그 수정없이 현재 구현을 개선한 경우. ex) `refactor: 중복코드 제거`
- hotfix: 프로덕션 단계에서 크리티컬한 버그를 수정한 경우.
