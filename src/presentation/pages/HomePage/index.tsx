import { FC } from "react";
import {
  Container,
} from '@mui/material';
import { HomePageProps, ProgressItemConfigProps } from "./types";
import * as Styled from "./styled";
import Header from './components/Header'
import ProgressItem from './components/ProgressItem';
import Announcements from './components/Announcements'
export * from "./types";

export const HomePage: FC<HomePageProps> = (props) => {
  const { announcements, profile } = props;

  const config = [
    {
      label: 'Verification',
      text: 'You verified your account',
      value: profile.verified
    }, {
      label: 'Profile picture',
      text: 'You added your profile picture',
      value: profile.profilePictureIsVerified
    }, {
      label: 'Parents',
      text: 'You added the parents',
      value: profile.parentsVerified
    }, {
      label: 'Litter',
      text: 'Your created the litter',
      value: profile.litterVerified
    }
  ] as ProgressItemConfigProps[]

  return (
    <Styled.PageWrapper disableGutters>
      <Header avatar={profile.avatar} name={profile.name}/>
      <Container>
        <Styled.PageItemWrapper>
          <ProgressItem config={config} globalProgress={profile.globalProgress} />
        </Styled.PageItemWrapper>
        <Styled.PageItemWrapper>
          <Announcements list={announcements} />
        </Styled.PageItemWrapper>
      </Container>
    </Styled.PageWrapper>
  );
};
