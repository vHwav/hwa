import MyPage from '@/components/organisms/MyPage/MyPage';
import Splash from '@/components/organisms/Splash/Splash';
import Settings from '@/components/organisms/Settings/Settings';
import AddPet from '@/components/organisms/AddPet/AddPet';
import ModifyProfile from '@/components/organisms/ModifyProfile/ModifyProfile';
import HeartList from '@/components/organisms/HeartList/HeartList';
import { RouteObject } from 'react-router-dom';
import { HeaderProps } from '@/components/molecules/Header/Header';
import Landing from '@/pages/Landing/Landing';

type NavigationRouteObject = RouteObject & {
  headerType?: [HeaderProps['type'], HeaderProps['title']];
};

export const navigationItems: NavigationRouteObject[] = [
  // 지우님
  {
    path: '/',
    element: <Landing />,
    index: true,
  },
  {
    path: '/signin',
    element: '',
    headerType: ['back', null],
  },
  {
    path: '/signup',
    element: '',
    headerType: ['step', null],
  },
  // 종연님
  {
    path: '/main',
    lazy: () => import('@/pages/Main/Main'),
    headerType: ['main', null],
  },
  {
    // query parameter 종류
    // filterType = range | mine | bookmark
    // filterType=range라면 => &startDate=yyMMdd&endDate=yyMMdd
    // sortType = distance | popular | price
    path: '/place_list',
    lazy: async () => import('@/pages/PlaceList/PlaceList'),
    headerType: ['main', null],
  },

  // 경화님
  {
    path: '/add_place',
    element: '',
    headerType: ['back', '플레이스 등록'],
  },
  {
    path: '/place_detail/:id',
    element: '',
    headerType: ['place', null],
  },
  {
    path: '/reservation_list/:id',
    element: '',
  },
  {
    path: '/reservation_done',
    element: '',
    headerType: ['popup', null],
  },

  // 종명님
  {
    path: '/stories',
    element: '',
    headerType: ['logo', null],
  },
  {
    path: '/stories/post',
    element: '',
    headerType: ['popup', null],
  },
  {
    path: '/reserve_list',
    element: <></>,
    headerType: ['logo', null],
  },
  {
    path: '/chat_list',
    element: '',
    headerType: ['back', '채팅 목록'],
  },
  {
    path: '/chat_room',
    element: '',
  },

  // 다영님
  {
    path: '/mypage',
    element: (
      <>
        <MyPage />
      </>
    ),
    headerType: ['popup', '마이 페이지'],
  },
  {
    path: '/add_mypet',
    element: <AddPet />,
    headerType: ['back', '반려동물 추가'],
  },
  {
    path: '/edit_my_profile',
    element: <ModifyProfile />,
    headerType: ['back', '프로필 변경'],
  },
  {
    path: '/bookmark',
    element: <HeartList />,
    headerType: ['logo', null],
  },
  {
    path: '/settings',
    element: (
      <>
        <Settings />
      </>
    ),
    headerType: ['logo', null],
  },

  // 미할당
  {
    path: '/events',
    element: '',
    headerType: ['back', '이벤트 목록'],
  },
  {
    path: '/change_phone',
    element: '',
  },
  {
    path: '/change_address',
    element: '',
  },
];
