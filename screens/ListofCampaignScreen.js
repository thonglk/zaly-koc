import React from 'react';
import * as CustomCode from '../components.js';
import {
  ButtonSolid,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import * as WebBrowser from 'expo-web-browser';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ListofCampaignScreen = props => {
  const { theme } = props;

  const CopyLink = url => {
    Clipboard.setString(url);
  };

  const postData = async () => {
    const url = `https://api.accesstrade.vn/v1/campaigns`;
    const headers = {
      Accept: 'application/json',
      Authorization: 'Token tE9hS7UFRu7A2ztqPZTiP-ASaBxDOFRM',
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      lastName,
      firstName,
      phone: phoneNumber,
      email,
      clientCode,
      coachId: props.route.params['userId'],
      userId: props.route.params['userId'],
    });
    if (loader) return console.log(loader);
    setLoader('Loading...');
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
      if (result.error) throw new Error(result.error);
      setLoader(undefined);
      return (result = await response.json());
    } catch (error) {
      setLoader(undefined);

      alert(error);
    }
  };

  const getData = async () => {
    const url = `https://api.accesstrade.vn/v1/campaigns`;
    const headers = {
      Accept: 'application/json',
      Authorization: 'Token tE9hS7UFRu7A2ztqPZTiP-ASaBxDOFRM',
      'Content-Type': 'application/json',
    };

    if (loader) return console.log(loader);
    setLoader('Loading...');

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers,
      });
      if (result.error) throw new Error(result.error);
      setLoader(undefined);
      return (result = await response.json());
    } catch (error) {
      setLoader(undefined);

      alert(error);
    }
  };
  const isFocused = useIsFocused();
  const [loading, setLoading] = React.useState('');

  const onPressS75jQiCS = async () => {
    await WebBrowser.openBrowserAsync('https://zaly.me/dashboard');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View style={styles.Viewog}>
        <Text
          style={[theme.typography.headline4, { color: theme.colors.strong }]}
        >
          {'Danh sách chiến dịch'}
        </Text>

        <Touchable style={styles.TouchableTg}>
          <ButtonSolid
            onPress={async () => {
              try {
                await onPressS75jQiCS();
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidB3,
              { backgroundColor: theme.colors.primary },
            ]}
            title="Mở Zaly"
          >
            {`Sign Up`}
          </ButtonSolid>
        </Touchable>
      </View>

      <View>
        <Fetch
          key={`2zBTxN8t-${String(isFocused)}`}
          cacheResponse={false}
          url={`https://api.airtable.com/v0/appGutSxDtkrkLZw2/Campaign?view=Grid view&maxRecords=80`}
          method="GET"
          headers={{
            Accept: 'application/json',
            Authorization: 'Bearer keygmdrkdCaPulICK',
            'Content-Type': 'application/json',
          }}
        >
          {({ loading, error, data, doFetch }) => {
            if (!data || loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return (
                <Text style={{ textAlign: 'center' }}>
                  There was a problem fetching this data
                </Text>
              );
            }

            return (
              <FlatList
                data={data['records']}
                renderItem={({ item }) => (
                  <View>
                    <View
                      style={[
                        styles.ViewWA,
                        {
                          borderColor: theme.colors.divider,
                          backgroundColor: theme.colors.background,
                          borderRadius: theme.roundness,
                        },
                      ]}
                    >
                      <View style={styles.ViewOI}>
                        <View style={styles.ViewVq}>
                          <Text
                            style={[
                              theme.typography.headline5,
                              { color: theme.colors.strong },
                            ]}
                          >
                            {item?.fields?.name}
                          </Text>
                        </View>

                        <View
                          style={[
                            styles.View_2u,
                            {
                              borderRadius: theme.roundness,
                              borderColor: theme.colors.divider,
                            },
                          ]}
                        >
                          <Image
                            style={styles.Imagecx}
                            resizeMode="cover"
                            source={{
                              uri: `${
                                item && item['fields'] && item['fields']['logo']
                              }`,
                            }}
                          />
                        </View>
                      </View>

                      <View style={styles.Viewd1}>
                        <Text
                          style={[
                            styles.TextYd,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {'Hoa hồng: '}
                          {item?.fields?.max_commission_rate}
                          {'%'}
                        </Text>
                        <>
                          {!item?.fields?.max_commission_value ? null : (
                            <Text
                              style={[
                                styles.Textiu,
                                { color: theme.colors.light },
                              ]}
                            >
                              {'$'}
                              {item?.fields?.max_commission_value}{' '}
                            </Text>
                          )}
                        </>
                      </View>

                      <View style={styles.ViewIx}>
                        <Text
                          style={[
                            theme.typography.subtitle2,
                            styles.Text_77,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {'Link: '}
                          {item?.fields?.url}
                        </Text>
                      </View>

                      <Touchable
                        onPress={() => {
                          try {
                            CopyLink(item?.fields?.url);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={styles.TouchableBb}
                      >
                        <View
                          style={[
                            styles.View_6p,
                            {
                              backgroundColor: theme.colors.primary,
                              borderRadius: theme.roundness,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              theme.typography.button,
                              styles.Textap,
                              { color: theme.colors.background },
                            ]}
                          >
                            {'Copy Link'}
                          </Text>
                        </View>
                      </Touchable>
                    </View>
                  </View>
                )}
                numColumns={1}
                data={data['records']}
              />
            );
          }}
        </Fetch>
      </View>
      <TextInput
        onChangeText={loading => {
          try {
            setLoading(loading);
          } catch (err) {
            console.error(err);
          }
        }}
        style={[styles.TextInputTC, { borderColor: theme.colors.divider }]}
        placeholder="Change my fieldname to email or password on the right side"
        value={loading}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidB3: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  TouchableTg: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewog: {
    alignItems: 'center',
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  ViewVq: {
    maxWidth: '70%',
  },
  Imagecx: {
    height: 64,
    width: 64,
  },
  View_2u: {
    minWidth: 64,
    minHeight: 64,
    maxWidth: 64,
    maxHeight: 64,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    marginLeft: 8,
  },
  ViewOI: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  TextYd: {
    marginRight: 6,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 16,
  },
  Textiu: {
    textDecorationLine: 'line-through',
    fontSize: 16,
  },
  Viewd1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 2,
  },
  Text_77: {
    marginRight: 4,
  },
  ViewIx: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  Textap: {
    textAlign: 'center',
  },
  View_6p: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableBb: {
    marginTop: 24,
    alignSelf: 'flex-start',
  },
  ViewWA: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingTop: 24,
    paddingLeft: 24,
    paddingBottom: 24,
    paddingRight: 24,
    marginTop: 14,
    marginBottom: 14,
    flexGrow: 0,
  },
  TextInputTC: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    opacity: 0,
  },
});

export default withTheme(ListofCampaignScreen);