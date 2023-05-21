/// <reference types="react-scripts" />

type PickValueType<T, U extends keyof T> = Pick<T, U>[U];
