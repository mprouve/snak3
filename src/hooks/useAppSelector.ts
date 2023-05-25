import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

/**
 * REDUX
 */

// Use throughout your app instead of plain `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
