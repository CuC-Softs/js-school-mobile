import React, {useEffect, useImperativeHandle, useRef} from 'react';
import {TextInput as T} from 'react-native-paper';
import {useField} from '@unform/core';
import {TextInputProps as TP} from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

export interface TextInputProps extends Omit<TP, 'theme'> {
  name: string;
}
interface InputValueReference {
  value: string;
}
interface InputRef {
  focus(): void;
}

const TextInput = React.forwardRef<InputRef, TextInputProps>(
  ({name, ...rest}, ref) => {
    const {defaultValue, fieldName, registerField} = useField(name);
    const inputRef = useRef<InputValueReference>({value: defaultValue});
    const inputElementRef = useRef<any>(null);
    useImperativeHandle(ref, () => ({
      focus() {
        inputElementRef.current.focus();
      },
    }));

    useEffect(() => {
      registerField<string>({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
        setValue(_, value) {
          inputRef.current.value = value;
          inputElementRef.current.setNativeProps({text: value});
        },
        clearValue() {
          inputRef.current.value = '';
          inputElementRef.current.clear();
        },
      });
    }, [fieldName, registerField]);
    return (
      <T
        ref={inputElementRef}
        defaultValue={defaultValue}
        onChangeText={value => {
          inputRef.current.value = value;
        }}
        {...rest}
      />
    );
  },
);

export default TextInput;
