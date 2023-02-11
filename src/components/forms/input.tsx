import React from 'react';
import {Control, RegisterOptions, useController} from 'react-hook-form';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

import colors from '@constants/theme';
import {inputShadowStyles} from '@constants/common-styles';
import {getWidth} from '@constants/utils';

type InputProps = {
  name: string;
  shadowLess?: boolean;
  disabled?: boolean;
  onChangeDefault?: (item: string) => void | undefined;
  control: Control<any, object>;
  rules?: Omit<
    RegisterOptions<any, string>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  style: object;
  onPress?: () => void | undefined;
} & TextInputProps;

const Input = ({
  name,
  control,
  rules,
  placeholder,
  style,
  disabled,
  placeholderTextColor,
  shadowLess,
  onChangeDefault,
  onPress,
  ...props
}: InputProps) => {
  const {
    field: {value, onChange, onBlur},
    fieldState: {error},
  } = useController({control, name, rules});

  const renderError = () =>
    error && error.message ? (
      <Text
        style={{
          color: error?.message ? colors.COLORS.ERROR : colors.COLORS.BLACK,
          ...styles.helperText,
        }}>
        {error?.message}
      </Text>
    ) : null;

  const inputStyles = [
    !shadowLess && {...inputShadowStyles},
    {
      ...style,
      borderWidth: getWidth(0.5),
      backgroundColor: colors.COLORS.WHITE,
      borderColor:
        error && error.message
          ? colors.COLORS.ERROR
          : colors.COLORS.TRANSPARENT,
    },
  ];

  return (
    <View>
      <TextInput
        placeholder={placeholder}
        value={value}
        editable={!disabled}
        onChangeText={text => {
          if (onChangeDefault) {
            onChangeDefault(text);
          }
          onChange(text);
        }}
        onBlur={onBlur}
        onFocus={() => {
          if (onPress) {
            onPress();
          }
        }}
        onPressIn={onPress ? onPress : undefined}
        style={inputStyles}
        placeholderTextColor={placeholderTextColor}
        {...props}
      />
      {renderError()}
    </View>
  );
};

const styles = StyleSheet.create({
  helperText: {
    marginLeft: 10,
    textAlign: 'left',
  },
});

export default Input;
