/* Copyright 2021 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/

export enum CategoryEnum {
  NONE,
  WHATS_NEW,
}

/**
 * A notification chunk displayed in the notification center.
 */
export interface Notification {
  category: CategoryEnum;
  dateInMs: number;
  title: string;
  content: string;
}

export const NOTIFICATION_FEATURE_KEY = 'notification';

export interface NotificationState {
  notifications: Notification[];
}

export interface State {
  [NOTIFICATION_FEATURE_KEY]?: NotificationState;
}
