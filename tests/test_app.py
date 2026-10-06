from app import app


def test_pages_render_without_debug_mode():
    assert not app.debug
    with app.test_client() as client:
        for route in ("/", "/resume", "/experience", "/videos"):
            assert client.get(route).status_code == 200
