import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

export const StyledCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  .react-calendar {
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    padding: 3% 5%;
    background-color: white;
  }

  /* 전체 폰트 컬러 */
  .react-calendar__month-view {
    abbr {
      color: black;
    }
  }

  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
    justify-content: center;
  }

  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    font-weight: 800;
    font-size: 1rem;
  }

  /* 네비게이션 버튼 컬러 */
  .react-calendar__navigation button:focus {
    background-color: white;
  }

  /* 네비게이션 비활성화 됐을때 스타일 */
  .react-calendar__navigation button:disabled {
    background-color: white;
    color: ${(props) => props.theme.darkBlack};
  }

  /* 년/월 상단 네비게이션 칸 크기 줄이기 */
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }

  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
  }

  /* 일요일에만 빨간 폰트 */
  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
    color: ${(props) => props.theme.red_1};
  }

  /* 오늘 날짜 폰트 컬러 */
  .react-calendar__tile--now {
    background: none;
    abbr {
      color: ${(props) => props.theme.primary_2};
    }
  }

  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
    border-radius: 0.8rem;
    background-color: ${(props) => props.theme.gray_5};
    padding: 0;
  }

  /* 네비게이션 현재 월 스타일 적용 */
  .react-calendar__tile--hasActive {
    background-color: ${(props) => props.theme.primary_2};
    abbr {
      color: white;
    }
  }

  /* 일 날짜 간격 */
  .react-calendar__tile {
    padding: 5px 0px 18px;
    position: relative;
  }

  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
    flex: 0 0 calc(33.3333% - 10px) !important;
    margin-inline-start: 5px !important;
    margin-inline-end: 5px !important;
    margin-block-end: 10px;
    padding: 20px 6.6667px;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${(props) => props.theme.gray_1};
  }

  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: ${(props) => props.theme.yellow_2};
    color: #ff4948;
    border-radius: 0.3rem;
  }
`;

export const StyledCalendar = styled(Calendar)``;

/* 오늘 날짜에 텍스트 삽입 스타일 */
export const StyledToday = styled.div`
  font-size: 10px;
  color: ${(props) => props.theme.br_2};
  font-weight: 600;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translateX(-50%);
`;

/* 출석한 날짜에 점 표시 스타일 */
export const StyledMorningDot = styled.div`
  border-radius: 50%;
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  top: 60%;
  left: 42%;
  transform: translateX(-50%);
`;

export const StyledAfternoonDot = styled.div`
  border-radius: 50%;
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  top: 60%;
  left: 58%;
  transform: translateX(-50%);
`;

export const Info = styled.div`
  position: absolute;
  top: 58px;
  left: 345px;
  transform: translate(-50%);
  width: 40px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GreenDot = styled.div`
  border-radius: 50%;
  width: 0.3rem;
  height: 0.3rem;
  background-color: #008000;
`;

export const YellowDot = styled.div`
  border-radius: 50%;
  width: 0.3rem;
  height: 0.3rem;
  background-color: #ffd700;
`;

export const RedDot = styled.div`
  border-radius: 50%;
  width: 0.3rem;
  height: 0.3rem;
  background-color: #ff0000;
`;

export const Status = styled.p`
  margin-left: 3px;
  font-size: 10px;
`;
