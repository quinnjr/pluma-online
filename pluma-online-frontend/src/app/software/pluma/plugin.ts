// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

export interface Plugin {
  id: number;
  name: string;
  description: string;
  category_id: number;
  category_name: string;
  language_name: string;
  github_url: string;
}
