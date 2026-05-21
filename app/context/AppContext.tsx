"use client";

import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  type Dispatch,
  type ReactNode,
} from "react";
import { STYLIST } from "@/data/stylist";
import { COLLECTIONS, COLLECTION_CATEGORIES } from "@/data/collections";
import { EVENTS, EVENT_TYPES } from "@/data/events";
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from "@/data/gallery";
import type {
  Stylist,
  Collection,
  FashionEvent,
  GalleryItem,
} from "@/data/types";

// ─── State ────────────────────────────────────────────────────────────────────
interface AppState {
  stylist: Stylist;
  collections: Collection[];
  collectionCategories: string[];
  activeCollectionCategory: string;
  events: FashionEvent[];
  eventTypes: string[];
  activeEventType: string;
  galleryItems: GalleryItem[];
  galleryCategories: string[];
  activeGalleryCategory: string;
  lightboxOpen: boolean;
  lightboxIndex: number;
  navOpen: boolean;
  navScrolled: boolean;
}

const initialState: AppState = {
  stylist: STYLIST,
  collections: COLLECTIONS,
  collectionCategories: COLLECTION_CATEGORIES,
  activeCollectionCategory: "Tous",
  events: EVENTS,
  eventTypes: EVENT_TYPES,
  activeEventType: "Tous",
  galleryItems: GALLERY_ITEMS,
  galleryCategories: GALLERY_CATEGORIES,
  activeGalleryCategory: "Tous",
  lightboxOpen: false,
  lightboxIndex: 0,
  navOpen: false,
  navScrolled: false,
};

// ─── Actions ──────────────────────────────────────────────────────────────────
export const ACTIONS = {
  SET_COLLECTION_CATEGORY: "SET_COLLECTION_CATEGORY",
  SET_EVENT_TYPE: "SET_EVENT_TYPE",
  SET_GALLERY_CATEGORY: "SET_GALLERY_CATEGORY",
  OPEN_LIGHTBOX: "OPEN_LIGHTBOX",
  CLOSE_LIGHTBOX: "CLOSE_LIGHTBOX",
  LIGHTBOX_NEXT: "LIGHTBOX_NEXT",
  LIGHTBOX_PREV: "LIGHTBOX_PREV",
  TOGGLE_NAV: "TOGGLE_NAV",
  CLOSE_NAV: "CLOSE_NAV",
  SET_NAV_SCROLLED: "SET_NAV_SCROLLED",
} as const;

type ActionType = typeof ACTIONS;

type AppAction =
  | { type: ActionType["SET_COLLECTION_CATEGORY"]; payload: string }
  | { type: ActionType["SET_EVENT_TYPE"]; payload: string }
  | { type: ActionType["SET_GALLERY_CATEGORY"]; payload: string }
  | { type: ActionType["OPEN_LIGHTBOX"]; payload?: number }
  | { type: ActionType["CLOSE_LIGHTBOX"] }
  | { type: ActionType["LIGHTBOX_NEXT"] }
  | { type: ActionType["LIGHTBOX_PREV"] }
  | { type: ActionType["TOGGLE_NAV"] }
  | { type: ActionType["CLOSE_NAV"] }
  | { type: ActionType["SET_NAV_SCROLLED"]; payload: boolean };

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getFilteredGallery(state: AppState): GalleryItem[] {
  if (state.activeGalleryCategory === "Tous") return state.galleryItems;
  return state.galleryItems.filter(
    (i) => i.category === state.activeGalleryCategory,
  );
}

// ─── Reducer ──────────────────────────────────────────────────────────────────
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case ACTIONS.SET_COLLECTION_CATEGORY:
      return { ...state, activeCollectionCategory: action.payload };
    case ACTIONS.SET_EVENT_TYPE:
      return { ...state, activeEventType: action.payload };
    case ACTIONS.SET_GALLERY_CATEGORY:
      return { ...state, activeGalleryCategory: action.payload };
    case ACTIONS.OPEN_LIGHTBOX:
      return {
        ...state,
        lightboxOpen: true,
        lightboxIndex: action.payload ?? 0,
      };
    case ACTIONS.CLOSE_LIGHTBOX:
      return { ...state, lightboxOpen: false };
    case ACTIONS.LIGHTBOX_NEXT: {
      const len = getFilteredGallery(state).length;
      return { ...state, lightboxIndex: (state.lightboxIndex + 1) % len };
    }
    case ACTIONS.LIGHTBOX_PREV: {
      const len = getFilteredGallery(state).length;
      return { ...state, lightboxIndex: (state.lightboxIndex - 1 + len) % len };
    }
    case ACTIONS.TOGGLE_NAV:
      return { ...state, navOpen: !state.navOpen };
    case ACTIONS.CLOSE_NAV:
      return { ...state, navOpen: false };
    case ACTIONS.SET_NAV_SCROLLED:
      return { ...state, navScrolled: action.payload };
    default:
      return state;
  }
}

// ─── Context Value ────────────────────────────────────────────────────────────
interface AppContextValue extends AppState {
  dispatch: Dispatch<AppAction>;
  filteredCollections: Collection[];
  filteredEvents: FashionEvent[];
  filteredGallery: GalleryItem[];
  featuredCollections: Collection[];
  featuredEvents: FashionEvent[];
  currentLightboxItem: GalleryItem | null;
}

const AppContext = createContext<AppContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const filteredCollections = useMemo(
    () =>
      state.activeCollectionCategory === "Tous"
        ? state.collections
        : state.collections.filter(
            (c) => c.category === state.activeCollectionCategory,
          ),
    [state.collections, state.activeCollectionCategory],
  );

  const filteredEvents = useMemo(
    () =>
      state.activeEventType === "Tous"
        ? state.events
        : state.events.filter((e) => e.type === state.activeEventType),
    [state.events, state.activeEventType],
  );

  const filteredGallery = useMemo(
    () => getFilteredGallery(state),
    [state.galleryItems, state.activeGalleryCategory],
  );

  const featuredCollections = useMemo(
    () => state.collections.filter((c) => c.featured),
    [state.collections],
  );

  const featuredEvents = useMemo(
    () => state.events.filter((e) => e.featured),
    [state.events],
  );

  const value = useMemo<AppContextValue>(
    () => ({
      ...state,
      dispatch,
      filteredCollections,
      filteredEvents,
      filteredGallery,
      featuredCollections,
      featuredEvents,
      currentLightboxItem: filteredGallery[state.lightboxIndex] ?? null,
    }),
    [
      state,
      filteredCollections,
      filteredEvents,
      filteredGallery,
      featuredCollections,
      featuredEvents,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
