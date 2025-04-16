#!/bin/bash

# 从 widget3 到 widget100
for i in {3..100}; do
    # 创建目录结构
    mkdir -p "my-strapi-project/src/api/widget${i}/routes"
    mkdir -p "my-strapi-project/src/api/widget${i}/services"
    mkdir -p "my-strapi-project/src/api/widget${i}/controllers"
    mkdir -p "my-strapi-project/src/api/widget${i}/content-types/widget${i}"

    # 创建 routes 文件
    cat > "my-strapi-project/src/api/widget${i}/routes/widget${i}.ts" << EOF
/**
 * widget${i} router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::widget${i}.widget${i}');
EOF

    # 创建 services 文件
    cat > "my-strapi-project/src/api/widget${i}/services/widget${i}.ts" << EOF
/**
 * widget${i} service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::widget${i}.widget${i}');
EOF

    # 创建 controllers 文件
    cat > "my-strapi-project/src/api/widget${i}/controllers/widget${i}.ts" << EOF
/**
 * widget${i} controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::widget${i}.widget${i}');
EOF

    # 创建 schema.json 文件
    cat > "my-strapi-project/src/api/widget${i}/content-types/widget${i}/schema.json" << EOF
{
  "kind": "collectionType",
  "collectionName": "widget${i}s",
  "info": {
    "singularName": "widget${i}",
    "pluralName": "widget${i}s",
    "displayName": "widget${i}"
  },
  "options": {
    "draftAndPublish": true
  },
  "attributes": {
    "name": {
      "type": "string"
    }
  }
}
EOF

    echo "Created widget${i}"
done

echo "All widgets created successfully!" 