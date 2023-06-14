import { create } from 'zustand';

import { type TaskAuthorType } from '~/types/author';

export interface ThemeState {
	theme: 'light' | 'dark';
	setTheme: (theme: 'light' | 'dark') => void;
}

export const useThemeStore = create<ThemeState>()((set) => ({
	theme:
		typeof window !== 'undefined'
			? window.localStorage.getItem('theme') === 'dark'
				? 'dark'
				: 'light'
			: 'dark',
	setTheme: (theme) => set({ theme }),
}));

export interface LayoutState {
	isMobile: boolean;
	layout: 'mobile' | 'desktop';
	setIsMobile: (isMobile: boolean) => void;
	setLayout: (layout: 'mobile' | 'desktop') => void;
}

export const useLayoutStore = create<LayoutState>()((set) => ({
	isMobile: false,
	layout:
		typeof window !== 'undefined'
			? window.innerWidth < 768
				? 'mobile'
				: 'desktop'
			: 'desktop',
	setIsMobile: (isMobile) => set({ isMobile }),
	setLayout: (layout) => set({ layout }),
}));

export interface TaskAuthorState {
	taskAuthor: TaskAuthorType;
	setTaskAuthor: (taskAuthor: TaskAuthorType) => void;
}

export const useTaskAuthorStore = create<TaskAuthorState>()((set) => ({
	taskAuthor: 'all',
	setTaskAuthor: (taskAuthor: TaskAuthorType) => set({ taskAuthor }),
}));

export interface AuthorizedUserState {
	isAuthorized: boolean;
	setIsAuthorized: (isAuthorized: boolean) => void;
}

export const useAuthorizedUserStore = create<AuthorizedUserState>()((set) => ({
	isAuthorized: false,
	setIsAuthorized: (isAuthorized) => set({ isAuthorized }),
}));

export interface ModalAddTaskState {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export const useModalAddTaskStore = create<ModalAddTaskState>()((set) => ({
	isOpen: false,
	setIsOpen: (isOpen) => set({ isOpen }),
}));
