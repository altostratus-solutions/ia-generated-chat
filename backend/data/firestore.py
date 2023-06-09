import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from services import get_settings

settings = get_settings()
# Use a service account.
cred = credentials.Certificate({
  "type": settings.firebase_type,
  "project_id": settings.firebase_project_id,
  "private_key_id": settings.firebase_private_key_id,
  "private_key": settings.firebase_private_key.replace('\\n', '\n'),
  "client_email": settings.firebase_client_email,
  "client_id": settings.firebase_client_id,
  "auth_uri": settings.firebase_auth_uri,
  "token_uri": settings.firebase_token_uri,
  "auth_provider_x509_cert_url": settings.firebase_auth_provider_x509_cert_url,
  "client_x509_cert_url": settings.firebase_client_x509_cert_url,
  "universe_domain": settings.firebase_universe_domain
}
)

app = firebase_admin.initialize_app(cred)

db = firestore.client()