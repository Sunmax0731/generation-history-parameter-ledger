export const productConfig = {
  "product": {
    "rank": 9,
    "tier": "P0",
    "score": 69,
    "domain": "AssetPipeline",
    "ideaNo": 5,
    "ideaName": "生成履歴・パラメータ固定台帳",
    "repository": "generation-history-parameter-ledger",
    "publish": "GitHub Release / BOOTH",
    "priorityReason": "生成AI/プロシージャル制作の再現性問題に刺さり、台帳MVPから始められる。",
    "surface": "アセットパイプライン向け CLI、検証モデル、静的 HTML レビュー画面",
    "integration": "Houdini / Blender Geometry Nodes / Substance 3D Designer",
    "overview": "ノード生成物の入力値、乱数種、書き出し設定、生成結果を1カードに残す。",
    "problem": "プロシージャル素材は後から同じ結果を再生成しにくい。",
    "differentiation": "生成パラメータ、プレビュー、採用理由を成果物とセットで保存する。",
    "adobeHost": null,
    "adobeHostReason": null
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
