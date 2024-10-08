
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum PreferredLanguage {
    ENGLISH = "ENGLISH",
    IRISH = "IRISH"
}

export enum ContentLanguage {
    IRISH = "IRISH",
    ENGLISH = "ENGLISH",
    UNKNOWN = "UNKNOWN"
}

export enum AttendanceStatus {
    ATTENDING = "ATTENDING",
    MAY_ATTEND = "MAY_ATTEND",
    NO_LONGER_ATTENDING = "NO_LONGER_ATTENDING",
    UNKNOWN = "UNKNOWN"
}

export enum Recurrence {
    NONE = "NONE",
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    FORTNIGHTLY = "FORTNIGHTLY",
    MONTHLY = "MONTHLY"
}

export enum Fluency {
    NATIVE = "NATIVE",
    ADVANCED = "ADVANCED",
    INTERMEDIATE = "INTERMEDIATE",
    BEGINNER = "BEGINNER"
}

export enum MessageStatus {
    SENT = "SENT",
    DELIVERED = "DELIVERED",
    VIEWED = "VIEWED"
}

export interface IQuery {
    __typename?: 'IQuery';
    getTime(): DateTime | Promise<DateTime>;
    getFeed(page?: Nullable<number>): Nullable<UserGeneratedContent[]> | Promise<Nullable<UserGeneratedContent[]>>;
    getGatherings(page?: Nullable<number>): Nullable<Gathering[]> | Promise<Nullable<Gathering[]>>;
    getGatheringById(id: string): Nullable<Gathering> | Promise<Nullable<Gathering>>;
    getUser(): Nullable<User> | Promise<Nullable<User>>;
    getUserById(id: string): Nullable<User> | Promise<Nullable<User>>;
    getLocalUsers(): Nullable<User[]> | Promise<Nullable<User[]>>;
    getConversations(): Nullable<Conversation[]> | Promise<Nullable<Conversation[]>>;
    getConversation(id: string): Nullable<Conversation> | Promise<Nullable<Conversation>>;
    getConversationById(id: string): Nullable<Conversation> | Promise<Nullable<Conversation>>;
}

export interface IMutation {
    __typename?: 'IMutation';
    setTime(): DateTime | Promise<DateTime>;
    createGathering(title: string, description: string): Nullable<Gathering> | Promise<Nullable<Gathering>>;
    deleteGathering(id: string): Nullable<Gathering> | Promise<Nullable<Gathering>>;
    createUser(email: string, password: string): Nullable<User> | Promise<Nullable<User>>;
    deleteUser(): Nullable<User> | Promise<Nullable<User>>;
}

export interface AttendeeConnection {
    __typename?: 'AttendeeConnection';
    count: number;
    edges: AttendeeEdge[];
}

export interface AttendeeEdge {
    __typename?: 'AttendeeEdge';
    cursor: string;
    node: Attendee;
}

export interface Attendee {
    __typename?: 'Attendee';
    id: string;
    attendance: AttendanceStatus;
    user?: Nullable<User>;
    gathering?: Nullable<Gathering>;
}

export interface ChatMessage {
    __typename?: 'ChatMessage';
    id: string;
    createdAt: DateTime;
    text: string;
    sentBy?: Nullable<User>;
    sentTo?: Nullable<User>;
    language: ContentLanguage;
}

export interface Gathering {
    __typename?: 'Gathering';
    id: string;
    createdAt: DateTime;
    lastUpdatedAt?: Nullable<DateTime>;
    title: string;
    address: string;
    bookmarked: boolean;
    coordinates?: Nullable<CoordinateSet>;
    description?: Nullable<string[]>;
    startsAt?: Nullable<DateTime>;
    timezone?: Nullable<string>;
    createdBy?: Nullable<User>;
    attendees?: Nullable<Attendee[]>;
    image?: Nullable<Image>;
    recurrence?: Nullable<Recurrence>;
    attendance?: Nullable<AttendanceStatus>;
    comments?: Nullable<Comment[]>;
}

export interface IrishAddress {
    __typename?: 'IrishAddress';
    eircode: string;
    address: string[];
}

export interface AmbiguousAddress {
    __typename?: 'AmbiguousAddress';
    address: string[];
    country: string;
}

export interface Image {
    __typename?: 'Image';
    id: string;
    url: string;
}

export interface Interest {
    __typename?: 'Interest';
    id: string;
    title: string;
}

export interface CoordinateSet {
    __typename?: 'CoordinateSet';
    longitude: number;
    latitude: number;
}

export interface Location {
    __typename?: 'Location';
    city?: Nullable<City>;
    coordinates?: Nullable<CoordinateSet>;
}

export interface City {
    __typename?: 'City';
    ga?: Nullable<string>;
    en?: Nullable<string>;
}

export interface Profile {
    __typename?: 'Profile';
    id: string;
    name: string;
    fluency: Fluency;
    preferredLanguage: PreferredLanguage;
    user?: Nullable<User>;
    initials: string;
}

export interface Timezone {
    __typename?: 'Timezone';
    zone: string;
}

export interface User {
    __typename?: 'User';
    id: string;
    createdAt: DateTime;
    lastOnlineAt: DateTime;
    lastUpdatedAt?: Nullable<DateTime>;
    email: string;
    timezone?: Nullable<Timezone>;
    posts?: Nullable<UserGeneratedContent[]>;
    interests?: Nullable<Nullable<Interest>[]>;
    attendance?: Nullable<Nullable<Attendee>[]>;
    profile: Profile;
    location?: Nullable<UserLocation>;
    avatar?: Nullable<Image>;
    online?: Nullable<boolean>;
}

export interface UserLocation {
    __typename?: 'UserLocation';
    coordinates?: Nullable<CoordinateSet>;
}

export interface Comment {
    __typename?: 'Comment';
    id: string;
    createdAt: DateTime;
    lastUpdatedAt?: Nullable<DateTime>;
    postedBy?: Nullable<User>;
    text: string;
    parent?: Nullable<UserGeneratedContent>;
}

export interface GatheringPost {
    __typename?: 'GatheringPost';
    id: string;
    createdAt: DateTime;
    lastUpdatedAt?: Nullable<DateTime>;
    score: number;
    comments?: Nullable<Nullable<Comment>[]>;
    location?: Nullable<Address>;
    postedBy?: Nullable<User>;
    gathering?: Nullable<Gathering>;
}

export interface TextPost {
    __typename?: 'TextPost';
    id: string;
    createdAt: DateTime;
    lastUpdatedAt?: Nullable<DateTime>;
    postedBy?: Nullable<User>;
    text: string;
    score: number;
    comments?: Nullable<Nullable<Comment>[]>;
    location?: Nullable<Address>;
    language?: Nullable<ContentLanguage>;
}

export interface Conversation {
    __typename?: 'Conversation';
    id: string;
    messages?: Nullable<MessageConnection>;
    partner?: Nullable<User>;
    unreadCount?: Nullable<number>;
}

export interface MessageConnection {
    __typename?: 'MessageConnection';
    count: number;
    edges: MessageEdge[];
}

export interface MessageEdge {
    __typename?: 'MessageEdge';
    cursor: string;
    node: Message;
}

export interface Message {
    __typename?: 'Message';
    id: string;
    createdAt: DateTime;
    text: string;
    sentBy?: Nullable<User>;
    sentTo?: Nullable<User>;
    language: ContentLanguage;
    status: MessageStatus;
}

export interface UserConnection {
    __typename?: 'UserConnection';
    count: number;
    edges?: Nullable<UserEdge[]>;
}

export interface UserEdge {
    __typename?: 'UserEdge';
    cursor: string;
    node: User;
}

export interface ISubscription {
    __typename?: 'ISubscription';
    onTime(): DateTime | Promise<DateTime>;
    onNewMessage(): Nullable<Conversation> | Promise<Nullable<Conversation>>;
}

export type DateTime = any;
export type UserGeneratedContent = TextPost | GatheringPost;
export type Address = IrishAddress | AmbiguousAddress;
type Nullable<T> = T | null;
