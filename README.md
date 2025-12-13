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

| 명령어 | 설명 |
|--------|------|
| `npm start` | Metro bundler와 개발 서버 시작 |
| `npm run android` | Android 에뮬레이터에서 앱 실행 |
| `npm run ios` | iOS 시뮬레이터에서 앱 실행 (macOS만 가능) |
| `npm run web` | 웹 브라우저에서 앱 실행 |

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
├── app/                # 앱 화면 및 라우팅
├── assets/             # 이미지, 폰트 등 정적 파일
├── app.json            # Expo 설정 파일
├── eas.json            # EAS Build 설정
├── package.json        # 프로젝트 의존성
└── tsconfig.json       # TypeScript 설정
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
