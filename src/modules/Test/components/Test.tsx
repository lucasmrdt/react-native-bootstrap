import React, {useMemo} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Button} from 'react-native';
import t from 'src/i18n';

import {Status} from 'src/types/Status';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export interface StateProps {
  status: Status;
}

export interface DispatchProps {
  launchTest: () => void;
}

type Props = StateProps & DispatchProps;

const Test = ({status, launchTest}: Props) => {
  const Default = useMemo(
    () => <Button title={t('test.default')} onPress={launchTest} />,
    [launchTest],
  );
  const Loading = useMemo(() => <ActivityIndicator />, []);
  const Success = useMemo(() => <Text>{t('test.success')}</Text>, []);
  const Failed = useMemo(() => <Text>{t('test.failed')}</Text>, []);

  return (
    <View style={styles.container}>
      {status === 'default' && Default}
      {status === 'loading' && Loading}
      {status === 'success' && Success}
      {status === 'failed' && Failed}
    </View>
  );
};

export default Test;
