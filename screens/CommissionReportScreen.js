import React from 'react';
import {
  DatePicker,
  ScreenContainer,
  TextField,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const convertDate = (date) =>{
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}Z`
}
const CommissionReportScreen = props => {
  const { theme } = props;

  const isFocused = useIsFocused();
  const [dateFrom, setDateFrom] = React.useState(new Date(Date.now()- 60*60*24*1000*30));
  const [dateTo, setDateTo] = React.useState(new Date());
  const [utmSource, setUtmSource] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View style={styles.Viewgb} pointerEvents="auto">
      <TextField
          onChangeText={utmSource => {
            try {
              setUtmSource(utmSource);
            } catch (err) {
              console.error(err);
            }
          }}
          label={'Zaly ID'}
          placeholder=""
          type="solid"
          value={utmSource}
        />
        <DatePicker
          onDateChange={dateFrom => {
            try {
              setDateFrom(dateFrom);
            } catch (err) {
              console.error(err);
            }
          }}
          label="Date"
          mode="date"
          leftIconMode="inset"
          type="solid"
          date={dateFrom}
        />
        <DatePicker
          onDateChange={dateTo => {
            try {
              
              setDateTo(dateTo);
            } catch (err) {
              console.error(err);
            }
          }}
          label="Date"
          mode="date"
          leftIconMode="inset"
          type="solid"
          date={dateTo}
        />
        
      </View>

      <View>
        <Fetch
          key={`qvbyzl9v-${String(isFocused)}`}
          cacheResponse={false}
          url={`https://api.accesstrade.vn/v1/orders?utm_source=${encodeURIComponent(
            utmSource
          )}&until=${encodeURIComponent(convertDate(dateTo))}&since=${encodeURIComponent(
            convertDate(dateFrom)
          )}`}
          method="GET"
          headers={{
            Accept: 'application/json',
            Authorization: 'Token tE9hS7UFRu7A2ztqPZTiP-ASaBxDOFRM',
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
                data={data['data']}
                renderItem={({ item }) => (
                  <View>
                    <View
                      style={[
                        styles.ViewtN,
                        {
                          borderColor: theme.colors.divider,
                          backgroundColor: theme.colors.background,
                          borderRadius: theme.roundness,
                        },
                      ]}
                    >
                      <View style={styles.Viewjt}>
                        <Text
                          style={[
                            styles.TextjG,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {'Hoa hồng: '}
                          {item?.pub_commission}
                          {' đ'}
                        </Text>
                      </View>

                      <View style={styles.ViewTe}>
                        <Text
                          style={[
                            theme.typography.subtitle2,
                            styles.TextDw,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {'Đơn hàng: '}
                          {item?.billing}{' đ'}
                        </Text>
                      </View>
                      <View style={styles.ViewTe}>
                        <Text
                          style={[
                            theme.typography.subtitle2,
                            styles.TextDw,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {'Trạng thái: '}
                  {item?.order_success?'Thành công':''}{item?.order_pending?'Chờ duyệt':''}{item?.order_reject?'Từ chối':''}

                        </Text>
                      </View>

                      <View style={styles.View_1G}>
                        <Text
                          style={[
                            theme.typography.subtitle2,
                            styles.TextqE,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {'Ngày mua: '}
                          {item?.sales_time}
                          {' \n'}
                        </Text>
                      </View>

                      <View style={styles.ViewRa}>
                        <Text
                          style={[
                            theme.typography.subtitle2,
                            styles.Text_6z,
                            { color: theme.colors.medium },
                          ]}
                          ellipsizeMode="head"
                          numberOfLines={1}
                        >
                          {'Link SP:'}
                          <a href={item?.at_product_link} target="_blank">{item?.at_product_link}</a>
                        </Text>
                      </View>

                      
                    </View>
                  </View>
                )}
                numColumns={1}
                data={data['data']}
              />
            );
          }}
        </Fetch>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Viewgb: {
    minHeight: 50,
  },
  ViewtM: {
    maxWidth: '70%',
  },
  Image_7A: {
    height: 64,
    width: 64,
  },
  ViewsL: {
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
  ViewMa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  TextjG: {
    marginRight: 6,
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 16,
  },
  TextGE: {
    textDecorationLine: 'line-through',
    fontSize: 16,
  },
  Viewjt: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 2,
  },
  TextqE: {
    marginRight: 4,
  },
  View_1G: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  Textt9: {
    textAlign: 'center',
  },
  ViewWE: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableDu: {
    marginTop: 24,
    alignSelf: 'flex-start',
  },
  ViewtN: {
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
});

export default withTheme(CommissionReportScreen);