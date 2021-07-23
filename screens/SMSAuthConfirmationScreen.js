import React from 'react';
import * as CustomCode from '../components.js';
import {
  Button,
  Link,
  ScreenContainer,
  TextField,
  withTheme,
} from '@draftbit/ui';
import * as Clipboard from 'expo-clipboard';
import * as WebBrowser from 'expo-web-browser';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

const SMSAuthConfirmationScreen = props => {
  const { theme } = props;

  const create = () => {
    const copy = `https://go.isclix.com/deep_link/4869877500462259539/4751584435713464237?utm_source=${zalyID}&url=${link}`;
    setResult(copy);
    Clipboard.setString(copy);
  };

  const [link, setLink] = React.useState('');
  const [zalyID, setZalyID] = React.useState('');
  const [result, setResult] = React.useState('');

  const onPressDKlq9Voz = async () => {
    await WebBrowser.openBrowserAsync(
      'https://docs.google.com/spreadsheets/d/14zeIsT2zjoqyH_EBS7CDlmXWr_4skZBmrRb_6jo6DuA/edit#gid=0'
    );
  };

  return (
    <ScreenContainer style={styles.screen} scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewRP}
        enabled={true}
        behavior="padding"
        keyboardVerticalOffset={60}
      >
        <View style={styles.ViewI0}>
          <Text
            style={[
              theme.typography.headline4,
              styles.Text_9C,
              { color: theme.colors.strong },
            ]}
          >
            {'Tạo link hoa hồng'}
          </Text>
          <TextField
            onChangeText={link => {
              try {
                setLink(link);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TextFieldMp}
            label={'Link gốc'}
            type="underline"
            keyboardType="numeric"
            leftIconMode="inset"
            value={link}
            placeholder=""
          />
          <TextField
            onChangeText={zalyID => {
              try {
                setZalyID(zalyID);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TextFieldNN}
            label={'Mã ZalyID'}
            type="underline"
            keyboardType="numeric"
            leftIconMode="inset"
            value={zalyID}
            placeholder=""
            assistiveText="Thường là ID Tiktok hoặc Insta"
          />
        </View>

        <View style={styles.ViewQc}>
          <Button
            onPress={() => {
              try {
                create();
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.ButtonSQ}
            type="solid"
          >
            {'Tạo và copy link'}
          </Button>
        </View>

        <View style={styles.ViewxE} pointerEvents="auto">
          <Text style={{ color: theme.colors.strong }}>{'Kết quả'}</Text>
          <TextField
            onChangeText={result => {
              try {
                setResult(result);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder="Change my fieldname to email or password on the right side"
            type="solid"
            multiline={true}
            value={result}
          />
        </View>

        <View style={styles.View_3Z} pointerEvents="auto">
          <Link
            onPress={async () => {
              try {
                await onPressDKlq9Voz();
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.LinkLb, { color: theme.colors.primary }]}
            title="Top chiến dịch hoa hồng cao"
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Text_9C: {
    textAlign: 'center',
  },
  TextFieldMp: {
    height: 82,
    marginTop: 20,
  },
  TextFieldNN: {
    height: 82,
    marginTop: 20,
  },
  ViewI0: {
    paddingTop: 48,
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 48,
  },
  ButtonSQ: {
    height: 48,
  },
  ViewQc: {
    paddingBottom: 32,
    paddingLeft: 14,
    paddingRight: 14,
  },
  ViewxE: {
    minHeight: 50,
    paddingLeft: 18,
    paddingRight: 18,
  },
  LinkLb: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    padding: 0,
  },
  View_3Z: {
    minHeight: 50,
    alignItems: 'center',
    marginTop: 40,
  },
  KeyboardAvoidingViewRP: {
    flexGrow: 1,
    maxWidth: 600,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    minWidth: 350,
  },
  screen: {
    alignContent: 'center',
    alignSelf: 'center',
  },
});

export default withTheme(SMSAuthConfirmationScreen);