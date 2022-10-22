import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { TDispatch, TStore } from '../utils/types';

export const useAppSelector: TypedUseSelectorHook<TStore> = useSelector;
export const useAppDispatch = () => useDispatch<TDispatch>();
